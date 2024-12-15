/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Todos los archivos relevantes
  ],
  prefix: "tx-", // Define el prefijo aquí
  theme: {
    extend: {},
  },
  plugins: [],
};
