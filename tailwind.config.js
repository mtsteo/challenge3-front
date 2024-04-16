/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footerTop: "#FAF3EA",
        grayTop: "#898989",
        bannerD: "#FFF3E3",
        cardBg: "#F4F5F7",
        discountBg: " #E97171",
        newProdBg: "#2EC1AC",
        filterBg : '#F9F1E7'
      },
    },
  },
  plugins: [],
};
