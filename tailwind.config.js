/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        lora: ["lora", "serif"], // Custom font
      },
      colors:{
        borderColor:'#292218',
        backgroundBg:'#5D555A',
        backgroundDark:'#44444C',
        buttonBankground:'#E6A87F',
        textColor:'#D2B7B1',
        buttonTextColor:'#292218'

      }
    },
  },

  // ⚡️ DaisyUI রাখা হচ্ছে শুধু component এর জন্য (কোনো থিম ছাড়া)
  plugins: [require("daisyui")],

  // ❌ DaisyUI এর থিম disable করা হচ্ছে
  daisyui: {
    themes: false, // No light/dark themes from DaisyUI
  },

  // 🌙 Enable Tailwind's class-based dark mode
  darkMode: "class",
}

