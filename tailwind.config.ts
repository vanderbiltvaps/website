module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        "roboto-flex": ["var(--font-roboto-flex)"],
      },
      colors: {
        "vaps-blue": "#3A7EB3",
        "vaps-dark-blue": "#172653",
      },
    },
  },
  plugins: [],
};
