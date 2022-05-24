// @import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&family=Quicksand:wght@500&family=Signika+Negative:wght@300&family=Yrsa:wght@300&display=swap');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: {
      myred: "rgb(245, 71, 73)",
      lightBlue1: "#DFE6F5",
      lightYellow: "rgb(255, 251, 238)",
      lightYellow1: "rgb(255, 253, 247)",
      lightBlue: "rgb(245, 247, 253)",
      lightRed: "#FFE7E7",
      btnYellow: "#FFEAA0",
    },
    extend: {
      borderRadius: "30px",
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
  colors: {
    myred: "rgb(245, 71, 73)",
    yellow: "rgb(255, 210, 51)",
    oYellow: "rgb(255, 199, 0)",
    lightYellow: "rgb(255, 253, 247)",
  },
  boxShadow: {
    priceshadow: "box-shadow: 4px 10px 8px rgba(160, 146, 146, 0.17)",
  },
  extend: {},
  plugins: [],
};
