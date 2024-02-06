/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'morning-image': "url('../public/images/morning.jpg')",
      }),
    },
  },
  plugins: [],
};
