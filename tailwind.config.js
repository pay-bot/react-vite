module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    
    {
      pattern: /bg-/||/text-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
};
