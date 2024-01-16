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
      },
      colors: {
        typ: {
          primary: "#768EE2",
          heading: "#5871D3",
          gray: "#404952",
        },
        box: {
          "low-white": "#F5F3FF",
          line: "#A7A9B780",
        },
      },
      boxShadow: {
        "navbar-dropdown": "0px 2px 10px 0px #00000026",
        pricing: "0px 5px 20px 0px #00000026",
      },
    },
  },
  plugins: [],
};
