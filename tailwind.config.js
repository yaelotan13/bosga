module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#e9311a",
        secondary: "#50b2c0",
        black: "#201e1f",
        grey: "#857e7b",
        light: "#feefdd",
        beige: "rgb(255, 241, 214)",
      },
      fontFamily: {
        caveat: ["Caveat", "Oswald", "sans-serif"],
      },
      keyframes: {
        "dot-bounce": {
          "0%, 100%": {
            transform: "translateY(-45%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(20%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "dot-bounce": "dot-bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
