/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'driven-dark': '#101727',
        'driven-darker': '#0D131D',
        'driven-card': '#354152',
        'driven-card2': '#1D2838',
        'driven-gold': '#FFBC00',
        'driven-blue': '#1F61F1',
        'driven-text': '#E5E7EB',
        'driven-muted': '#697282',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
