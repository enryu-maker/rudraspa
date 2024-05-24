/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#DFF8EB',
        'secondary-color-dark': '#BCF1D5',
        'primary-text-color': '#AEC596',
        'secondary-text-color': '#0A3200',
      },
    },
  },
  plugins: [],
};
