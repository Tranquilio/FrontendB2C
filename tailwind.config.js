/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { raleway: "Raleway", inter: "Inter" } },
    colors: {
      white: "#fff",
      black: "#000",
      turquoise: { "100": "#41ebc1", "200": "#22bc96" },
      gray: "#e7fff9",
      grayer: '#FDFDFD',
      grayerer: '#FBFBFB'
    },
    fontSize: {
      "5xs": "18px",
      "4xs": "20px",
      "3xs": "24px",
      "2xs": "28px",
      xs: "30px",
      sm: "32px",
      base: "36px",
      lg: "48px",
      xl: "60px",
    },
  },
  corePlugins: { preflight: false },
};
