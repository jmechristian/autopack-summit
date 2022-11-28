/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        oswald: 'Oswald, san-serif',
      },
      colors: {
        'ap-yellow': '#E4A800',
        'ap-darkblue': '#005892',
        'ap-blue': '#0873B8',
        'ap-red': '#E43A00',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
