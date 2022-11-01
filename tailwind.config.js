/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        plus: ['Plus Jakarta Sans', "sans-serif"],      
      },
      colors: {
        /**primarios */
      
        rojo: "hsl(1, 90%, 64%)",
        azul: "hsl(219, 85%, 26%)",
      
        /**neutral */
        azul_oscuro: "hsl(224, 21%, 14%)",
        azul_gris_oscuro: "hsl(219, 12%, 42%)",
        azul_gris: "hsl(219, 14%, 63%)",
        gris1: "hsl(211, 68%, 94%)",
        gris2: "hsl(205, 33%, 90%)",
        gris_claro: "hsl(210, 60%, 98%)",
      },
      
      /**altura personalizada */
      height:{
        '90': '21rem',

      },
      spacing:{
        '132': '8.61rem',
        '142': '42%'
      },
      transitionDuration:{
        '1500': '1500ms'
      },
    },
  },
  plugins: [],
}
