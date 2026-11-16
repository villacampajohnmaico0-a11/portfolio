# Northstar Studio

A conversion-focused business website built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
3. If you use a form service like Formspree, add your endpoint to `.env`:
   ```bash
   VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
   ```
4. Run the app locally:
   ```bash
   npm run dev
   ```

## Editing the site content

All core copy and pricing live in `src/data/*.js`.

- `site.js` — brand details, navigation, hero copy, contact options, and form options
- `solutions.js` — service cards and feature copy
- `projects.js` — featured work and project detail data
- `pricing.js` — package card copy
- `faqs.js` — FAQ answers

Update these files to change the business messaging, links, and package descriptions.

## Adding a project

Add a new object to `src/data/projects.js` using the existing structure:

```js
{
  slug: 'my-project',
  name: 'My Project',
  category: 'Business website',
  oneLinePurpose: 'A short summary of what the project does.',
  problem: 'The business challenge the site was addressing.',
  highlights: ['Feature 1', 'Feature 2', 'Feature 3'],
  projectType: 'Business Website',
  url: 'https://example.com',
  image: 'https://images.unsplash.com/...',
  status: 'Live project',
  description: 'Longer project summary.'
}
```

## Deployment to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite build settings.
4. Add your form endpoint under Environment Variables as `VITE_FORM_ENDPOINT` if you are using a form service.
5. Deploy.

## Notes

- The project uses design tokens and the `paper`, `ink`, `accent`, and `pop` palette from the config.
- For real project screenshots, replace the current image URLs with local files in `src/assets` or new remote sources.
- If a form endpoint is missing, the app falls back to a `mailto:` draft instead of faking a successful submit.
