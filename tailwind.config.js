/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body: ['var(--font-body)', 'Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['var(--font-display)', '"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        serif: ['var(--font-display)', '"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        custom: ['var(--font-display)', '"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
