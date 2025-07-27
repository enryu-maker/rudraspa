/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#9CCC36',
        'secondary-color-dark': '#BCF1D5',
        'primary-text-color': '#AEC596',
        'secondary-text-color': '#0A3200',
      },
      fontFamily: {
        Poppins: ['Akshar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
