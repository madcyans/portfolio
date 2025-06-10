/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind to look into all JS/JSX/TS/TSX files in src/
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // Example custom color: a dark blue with a slightly muted (pale) quality
        'pale-dark-blue': '#2B3A4E',
        'blue-930': '#1A2D6A',
        'royal-indigo': '#3C356C',
        'glowing-blue': '#1E90FF',
        'smoke-white': '#ECECEC',
      },
      fontFamily: {
        // A bold, all-caps look perfect for modern headers
        headerBold: ['Bebas Neue', 'sans-serif'],
        // A condensed, impactful style often used in headlines
        headerCondensed: ['Anton', 'sans-serif'],
        // A versatile option that’s modern and clean
        headerModern: ['Oswald', 'sans-serif'],
        // Or try something classical and artistic:
        headerArtistic: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

