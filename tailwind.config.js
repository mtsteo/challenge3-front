/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        footerTop : '#FAF3EA',
        grayTop : '#898989',
        bannerD : '#FFF3E3'
      },
    },
  },
  plugins: [],
};
