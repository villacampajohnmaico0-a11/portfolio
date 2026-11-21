/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F2EA',
        'paper-2': '#EDE7DA',
        ink: '#14151A',
        'ink-2': '#2A2C34',
        muted: '#6B6F7A',
        accent: '#2F4BFF',
        'accent-soft': '#DDE3FF',
        pop: '#C6F432',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(20, 21, 26, 0.08)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['var(--type-caption)', { lineHeight: '1.5' }],
        hero: ['var(--type-hero)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        section: ['var(--type-section)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        card: ['var(--type-card)', { lineHeight: '1.15' }],
        'small-heading': ['var(--type-small-heading)', { lineHeight: '1.35' }],
        'body-lg': ['var(--type-body-lg)', { lineHeight: '1.6' }],
        body: ['var(--type-body)', { lineHeight: '1.65' }],
        caption: ['var(--type-caption)', { lineHeight: '1.5' }],
        eyebrow: ['var(--type-eyebrow)', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        button: ['var(--type-button)', { lineHeight: '1.25' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        site: '1280px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 9s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
}
