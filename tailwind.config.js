/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'faint-purple': '#eeebfe',
        'font-purple': '#afacf0',
        'faint-black': '#2f3438',
        'faint-gray': '#f6f8ff',
        'blue-progress': '#9abaf3',
        'green-progress': '#24d366',
        'meeting-green': '#e9fbef',
        'circle-orange': '#f6a49b',
      },
    },
  },
  plugins: [],
}

