const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-source-sans)'],
        gugi: ['Gugi', ...defaultTheme.fontFamily.sans]
        // jetbrains: ['var(--font-jetbrains)']
      }
    }
  },

  plugins: []
}
