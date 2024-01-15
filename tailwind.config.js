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
      },
      colors: {
        typ: {
          primary: "#768EE2",
          gray: "#404952",
        },
        box: {
          "low-white": "#F5F3FF",
        },
      },
      boxShadow: {
        "navbar-dropdown": "0px 2px 10px 0px #00000026",
      },
    },
  },
  plugins: [],
};
