/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        footerTop : '#FAF3EA',
        grayTop : '#898989'
      },
      fontSize : {
        placeholder : '0.6rem'
      }
    },
  },
  plugins: [],
};
