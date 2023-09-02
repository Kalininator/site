const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        gugi: ['Gugi', ...defaultTheme.fontFamily.sans]
        // jetbrains: ['var(--font-jetbrains)']
      },
      colors: {
        bg: '#1f2c8a',
        main: '#f4bd53',
        aux1: '#24c3ad',
        aux2: '#3f3654'
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
}
