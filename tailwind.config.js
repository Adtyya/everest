/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-card":
          "linear-gradient(90deg, #E6BDF6 0%, #F3E6F5 47.94%, #BEDCF0 100%)",
        "dot-gradient":
          "radial-gradient(97.14% 93% at 97.14% 50%, rgba(30, 34, 61, 0) 0%, rgba(30, 34, 61, 0.4) 99.53%), linear-gradient(0deg, #768EE2, #768EE2)",
        "cover-gradient":
          "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 52.29%)",
        "cs-gradient":
          "linear-gradient(270deg, #E6BDF6 -0.09%, rgba(255, 255, 255, 0) 24.06%)",
      },
      colors: {
        typ: {
          primary: "#768EE2",
          heading: "#5871D3",
          gray: "#404952",
        },
        box: {
          "low-white": "#F5F3FF",
          pricing: "#FCFCFF",
          line: "#A7A9B780",
          gray: "#E6EEF4",
          "primary-fade": "#768EE299",
          input: "#D8D8D8",
          "btn-disabled": "#D9D9D9",
          "btn-text-disabled": "#A4A4A4",
          "header-table": "#768EE21A",
        },
      },
      boxShadow: {
        "navbar-dropdown": "0px 2px 10px 0px #00000026",
        pricing: "0px 5px 20px 0px #00000026",
        "pricing-active": "0px 5px 30px 0px #768EE280",
        "arrow-nav": "0px 4px 15px 0px #00000040",
        article: "0px 4px 20px 0px #00000040",
        form: "0px 4px 30px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
