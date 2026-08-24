import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#10110f', 800: '#272924', 600: '#595c54', 400: '#999d92' },
        paper: { DEFAULT: '#f4f3ed', raised: '#faf9f4', muted: '#e9e8e1' },
        acid: { DEFAULT: '#c7ff3d', soft: '#e5ff9e', dark: '#769d12' },
        success: '#238636',
        error: '#c83838',
      },
      fontFamily: {
        display: ['Arial Narrow', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(4.4rem, 12vw, 11.5rem)', { lineHeight: '0.76', letterSpacing: '-0.075em' }],
        h1: ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.84', letterSpacing: '-0.065em' }],
        h2: ['clamp(2.8rem, 6vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.055em' }],
        h3: ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
        h4: ['1.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        h5: ['1.125rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        h6: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.08em' }],
        body: ['1rem', { lineHeight: '1.65' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        36: '9rem',
        44: '11rem',
      },
      borderRadius: { none: '0', sm: '0.25rem', md: '0.5rem', lg: '1rem', full: '9999px' },
      maxWidth: { page: '90rem' },
    },
  },
  plugins: [forms],
} satisfies Config
