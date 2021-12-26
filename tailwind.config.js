module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [    "./index.html",    "./src/**/*.{vue,js,ts,jsx,tsx}",  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {        '3xl': '2px 2px 2px 2px rgba(0, 0, 0, 0.3)',      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
