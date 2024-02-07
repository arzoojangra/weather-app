/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg-image': "url('../public/images/bg.jpg')",
        'morning-image': "url('../public/images/morning.jpg')",
        'afternoon-image': "url('../public/images/afternoon.jpg')",
        'evening-image': "url('../public/images/evening.jpg')",
        'night-image': "url('../public/images/night.jpg')",
      }),
    },
  },
  plugins: [],
};
