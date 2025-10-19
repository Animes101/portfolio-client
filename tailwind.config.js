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
    },
   },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // light and dark theme enable
  },
}


