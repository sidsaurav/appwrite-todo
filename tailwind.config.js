/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
        "title":["RetroInline"],
        "body":["RetroReg"],
        "sans":["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI"]
    },
    listStyleType:{
    }
  },
  plugins: [
    function ({ addUtilities }) {
    const arrowBullet = {
      ".list-arrow li::before": {
        content: '"\\2192"', // Unicode arrow character (→)
        marginRight: "0.5rem",
      },
    };

    addUtilities(arrowBullet);
  },
],
}
