/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#002B49',
        brandSky: '#3A86C8',
        brandMint: '#A7F3D0',
        brandGreen: '#10B981',
        bgMint: '#F0FDF4',
      },
      fontFamily: {
        fredoka: ['"Baloo 2"', 'sans-serif'],
        outfit: ['"Baloo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
