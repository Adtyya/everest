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
        },
      },
      boxShadow: {
        "navbar-dropdown": "0px 2px 10px 0px #00000026",
        pricing: "0px 5px 20px 0px #00000026",
        "pricing-active": "0px 5px 30px 0px #768EE280",
        "arrow-nav": "0px 4px 15px 0px #00000040",
        article: "0px 4px 20px 0px #00000040",
      },
    },
  },
  plugins: [],
};
