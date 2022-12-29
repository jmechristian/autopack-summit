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
      backgroundImage: {
        'testimonial-yellow':
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2874_iijxzx.webp')",
        bgImage_testimonial:
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1670538588/AutoPack%20Summit/header_testimonials_dkease.webp')",
        bgImage_blue:
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp')",
        bgImage_sponsors:
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1670533836/AutoPack%20Summit/header_6_blue_nsdyz4.webp')",
        bgImage_travel:
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1670534232/AutoPack%20Summit/travel_header_id1h4v.webp')",
        bgImage_agenda:
          "url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1670537730/AutoPack%20Summit/agenda_header_oojce1.webp')",
        bgImage_reg_provider:
          "url('https://apsmedia.s3.amazonaws.com/images/regBlock_providers.webp')",
        bgImage_reg:
          "url('https://apsmedia.s3.amazonaws.com/images/regBlock.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
