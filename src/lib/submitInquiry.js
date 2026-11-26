export async function submitInquiry(values) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  if (!endpoint) {
    console.info('VITE_FORM_ENDPOINT is not configured; using mailto fallback.')
    return {
      mode: 'mailto',
      to: 'hello@islakila.dev',
      subject: `Project inquiry from ${values.fullName}`,
      body: [
        `Full name: ${values.fullName}`,
        `Email: ${values.email}`,
        `Business name: ${values.businessName || 'Not provided'}`,
        `Project type: ${values.projectType}`,
        `Estimated budget: ${values.budget}`,
        `Preferred contact: ${values.preferredContact}`,
        '',
        values.description,
      ].join('\n'),
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    throw new Error('Unable to send your inquiry right now.')
  }

  return { mode: 'network', ok: true }
}
