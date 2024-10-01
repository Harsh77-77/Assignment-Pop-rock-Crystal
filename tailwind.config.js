/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "google-sans": ['"Google Sans"', "sans-serif"],
      },
      boxShadow: {
        custom: "rgba(17, 17, 26, 0.05) 0px 8px 24px, rgba(17, 17, 26, 0.05) 0px 16px 56px, rgba(17, 17, 26, 0.05) 0px 24px 80px",
      },
    },
  },
  plugins: [],
};
