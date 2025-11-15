/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // Diz ao Tailwind para 'assistir' o index.html por classes
  content: ["./index.html"],
  theme: {
    extend: {
      // Adiciona a fonte 'Nunito Sans' (ou outra que preferir)
      fontFamily: {
        nunito: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
