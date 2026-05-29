/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-green-600',
    'bg-red-600'
  ],
  theme: {
    extend: {
      colors: {
        // Redefine standard gray classes to use our CSS variables
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        // Primario (Rojo-Naranja #fe4b00)
        primary: {
          50: 'var(--brand-orange-50)',
          100: 'var(--brand-orange-100)',
          200: 'var(--brand-orange-200)',
          400: 'var(--brand-orange-400)',
          500: 'var(--brand-orange-500)',
          600: 'var(--brand-orange-600)',
          700: 'var(--brand-orange-700)',
        },
        // Secundario (Amarillo #ffb700)
        secondary: {
          50: 'var(--brand-yellow-50)',
          100: 'var(--brand-yellow-100)',
          500: 'var(--brand-yellow-500)',
          600: 'var(--brand-yellow-600)',
          700: 'var(--brand-yellow-700)',
        },
        // Charcoal (Gris carbón / Negro / Blanco)
        charcoal: {
          100: 'var(--brand-charcoal-100)',
          500: 'var(--brand-charcoal-500)',
          600: 'var(--brand-charcoal-600)',
          700: 'var(--brand-charcoal-700)',
        }
      }
    },
  },
  plugins: [],
}