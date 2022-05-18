// @import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&family=Quicksand:wght@500&family=Signika+Negative:wght@300&family=Yrsa:wght@300&display=swap');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: {
      myred: "rgb(245, 71, 73)",
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
};
