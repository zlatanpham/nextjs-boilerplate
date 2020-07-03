module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    options: {
      whitelist: ['nprogress'],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions'),
    require('tailwindcss-transform'),
  ],
};
