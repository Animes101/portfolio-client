// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {
//       fontFamily: {
//         mozilaText: ["Mozilla Text", "sans-serif"], 
//         eduNsw: ["Edu NSW ACT Cursive", "cursive"],// Custom font name
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaSans: [ "Inter", "sans-serif"],// Custom font name
      },
       colors: {
        // তোমার custom color palette
        primary: {
          light: "#A78BFA", // light purple
          DEFAULT: "#7C3AED", // normal purple
          dark: "#5B21B6", // dark purple
        },
        secondary: {
          light: "#34D399", // teal
          DEFAULT: "#10B981",
          dark: "#065F46",
        },
        background: {
          light: "#F9FAFB", // very light
          DEFAULT: "#F3F4F6", // gray
          dark: "#111827",   // dark mode bg
        },
        text: {
          light: "#1F2937",  // gray-800
          dark: "#E5E7EB",   // gray-200
        },
      },
    },
   },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // light and dark theme enable
  },
}


