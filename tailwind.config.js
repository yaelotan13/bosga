module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#a95a54",
        secondary: "#50b2c0",
        black: "#201e1f",
        grey: "rgb(92,92,95)",
        light: "#feefdd",
        beige: "rgb(253,253,249)",
        text: "rgb(38,38,43)",
        green: "#7b876d",
        red: "rgb(224, 0, 81)",
        "grey-dark": "rgb(19,38,44)",
        "grey-light": "rgb(204,204,204)",
      },
      fontFamily: {
        caveat: ["Caveat", "Oswald", "sans-serif"],
      },
      backgroundImage: {
        heart:
          "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/web_heart_animation.png')",
      },
      backgroundSize: {
        "heart-size": "2900%",
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
        "heart-burst": {
          "0%": {
            "background-position": "left",
          },
          "100%": {
            "background-position": "right",
          },
        },
      },
      animation: {
        "dot-bounce": "dot-bounce 1s infinite",
        "heart-burst": "heart-burst .8s steps(28) forwards",
      },
    },
  },
  plugins: [],
};
