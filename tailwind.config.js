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
      },
    },
  },
  plugins: [],
}

