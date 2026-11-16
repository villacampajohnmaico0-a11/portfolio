import { AlertCircle, CheckCircle2, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { site } from '../../data/site'
import { submitInquiry } from '../../lib/submitInquiry'
import { projectTypeOptions, validateInquiry } from '../../lib/validation'
import Reveal from '../ui/Reveal'

const initialState = {
  fullName: '',
  email: '',
  businessName: '',
  projectType: '',
  budget: '',
  description: '',
  preferredContact: '',
  honeypot: '',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({ ...initialState, projectType: searchParams.get('projectType') || '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [sendError, setSendError] = useState('')

  useEffect(() => {
    const projectTypeFromQuery = searchParams.get('projectType')
    if (projectTypeFromQuery) {
      setForm((current) => ({ ...current, projectType: projectTypeFromQuery }))
    }
  }, [searchParams])

  const descriptionChars = useMemo(() => form.description.length, [form.description])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    const nextErrors = validateInquiry({ ...form, [name]: value })
    setErrors((current) => ({ ...current, [name]: nextErrors[name] }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (form.honeypot) {
      setErrors({ honeypot: 'Spam protection triggered.' })
      return
    }

    const nextErrors = validateInquiry(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setLoading(true)
    setSendError('')

    try {
      const result = await submitInquiry(form)
      if (result.mode === 'mailto') {
        const mailto = `mailto:${site.email}?subject=${encodeURIComponent(result.subject)}&body=${encodeURIComponent(result.body)}`
        window.location.href = mailto
        setSent(true)
      } else {
        setSent(true)
      }
    } catch (error) {
      setSendError('We could not send the message automatically. Please email hello@northstarstudio.example.')
      setSent(false)
    } finally {
      setLoading(false)
    }
  }

  const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${form.fullName || 'New inquiry'}`)}&body=${encodeURIComponent([
    `Full name: ${form.fullName || ''}`,
    `Email: ${form.email || ''}`,
    `Business name: ${form.businessName || 'Not provided'}`,
    `Project type: ${form.projectType || ''}`,
    `Estimated budget: ${form.budget || ''}`,
    `Preferred contact: ${form.preferredContact || ''}`,
    '',
    form.description || '',
  ].join('\n'))}`

  if (sent) {
    return (
      <section id="contact" className="bg-paper py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-ink/10 bg-white p-8 text-center shadow-soft">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] text-ink">Thanks! Your inquiry is in. I'll reply soon.</h2>
            <p className="mt-4 text-base leading-7 text-muted">I’ll review your request and follow up with the next steps.</p>
            <button type="button" onClick={() => { setSent(false); setForm({ ...initialState, projectType: searchParams.get('projectType') || '' }); }} className="mt-6 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
              Send another inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-paper py-24 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[32px] border border-ink/10 bg-ink p-7 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Contact</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-[-0.04em]">Have a business idea? Let’s bring it online.</h2>
              <p className="mt-5 text-base leading-7 text-white/75">Tell me what you're planning to build. Whether you need a business website, an online store, a booking platform, or a custom system, let's discuss how we can make it happen.</p>

              <div className="mt-8 space-y-4">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <Mail className="h-5 w-5 text-pop" />
                  <span>{site.email}</span>
                </a>
                <a href={site.linkedIn} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <MessageSquareText className="h-5 w-5 text-pop" />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-white/90">
                  <Phone className="h-5 w-5 text-pop" />
                  <span>{site.phone}</span>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <h3 className="font-display text-2xl tracking-[-0.04em] text-white">What happens next</h3>
                <ul className="mt-4 space-y-3 text-base text-white/75">
                  <li>1. I review your inquiry and requirements.</li>
                  <li>2. We align on the right solution and next steps.</li>
                  <li>3. We move into planning and build.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="rounded-[32px] border border-ink/10 bg-white p-6 shadow-soft md:p-8" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-ink">Full name</label>
                  <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent" />
                  {errors.fullName && <p id="fullName-error" className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent" />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-ink">Business name</label>
                  <input id="businessName" name="businessName" value={form.businessName} onChange={handleChange} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent" />
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-ink">Type of project</label>
                  <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? 'projectType-error' : undefined} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent">
                    <option value="">Select project type</option>
                    {projectTypeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.projectType && <p id="projectType-error" className="mt-2 text-sm text-red-600">{errors.projectType}</p>}
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-ink">Estimated budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? 'budget-error' : undefined} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent">
                    <option value="">Select budget</option>
                    {['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+', 'Not sure yet'].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.budget && <p id="budget-error" className="mt-2 text-sm text-red-600">{errors.budget}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-ink">Project description</label>
                  <textarea id="description" name="description" value={form.description} onChange={handleChange} onBlur={handleBlur} rows={6} aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? 'description-error' : undefined} className="w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent" />
                  <div className="mt-2 flex items-center justify-between text-xs text-muted">
                    <span>{descriptionChars}/20 minimum</span>
                    <span>Character count</span>
                  </div>
                  {errors.description && <p id="description-error" className="mt-2 text-sm text-red-600">{errors.description}</p>}
                </div>

                <div className="md:col-span-2">
                  <p className="mb-2 block text-sm font-medium text-ink">Preferred contact method</p>
                  <div className="flex flex-wrap gap-3">
                    {['Email', 'Phone / Messaging app', 'Video call'].map((option) => (
                      <label key={option} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-2 text-sm text-ink">
                        <input type="radio" name="preferredContact" value={option} checked={form.preferredContact === option} onChange={handleChange} className="accent-accent" />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.preferredContact && <p className="mt-2 text-sm text-red-600">{errors.preferredContact}</p>}
                </div>

                <div className="hidden">
                  <label htmlFor="honeypot">Leave empty</label>
                  <input id="honeypot" name="honeypot" value={form.honeypot} onChange={handleChange} className="sr-only" tabIndex={-1} autoComplete="off" />
                </div>
              </div>

              {sendError && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                  <div>
                    <p>{sendError}</p>
                    <a href={mailtoLink} className="mt-2 inline-block font-semibold underline">Open email draft</a>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? 'Sending…' : 'Send inquiry'}
                </button>
                <span className="text-sm text-muted">No fake promises. I’ll reply with next steps if it makes sense.</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
