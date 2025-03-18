/** @type {import('tailwindcss').Config} */
export default {
content: ["./*.html", "./css/**/*.css", "./js/**/*.js"], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(223, 87%, 63%)",
        secondaryPaleBlue: "hsl(223, 100%, 88%)",
        secondaryLightRed: "hsl(354, 100%, 66%)",
        neutralGray: "hsl(0, 0%, 59%)",
        neutralDarkBlue: "hsl(209, 33%, 12%)",
      },
      
    },
    
  },
  
  plugins: [],
};