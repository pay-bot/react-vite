module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  purge: {
    content: ["./layouts/**/*.html", "./src/**/*.vue", "./src/**/*.{js,jsx,ts,tsx}"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    options: {
      safelist: [
        "${bgHead}",
        
      ],
    },
  },
};
