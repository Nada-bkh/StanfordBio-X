/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'stanford-red': '#8C1515',
        'bio-blue': '#4A90E2',
        'bio-yellow': '#F5A623',
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
      }
    },
  },
  plugins: [],
}
