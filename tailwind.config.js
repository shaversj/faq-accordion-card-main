/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "920px",
      lg: "1440px"
    },
    extend: {
      backgroundImage: {
        bgDesktopShadow: "url('./src/assets/images/bg-pattern-desktop.svg')",
        bgMobileShadow: "url('./src/assets/images/bg-pattern-mobile.svg')"
      },
      colors: {
        "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",
        "light-grayish-blue": "hsl(240, 5%, 91%)"
      },
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"]
      }
    }
  },
  plugins: []
}
