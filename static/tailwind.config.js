/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {   
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      screens:{
        sm: '320px',
        mm: '375px',
        md: '768px',
        lg: '1024px', 
        xl: '1440px'
      },
    },
  plugins: [],
}
}
