/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-small": "url(./assets/images/hero-small.webp)",
        "hero-medium": "url(./assets/images/hero-medium.webp)",
        "hero-large": "url(./assets/images/hero-large.webp)",
        "not-found": "url(./assets/images/bg-lost-in-space.png)",
        gradient:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
    },
  },
  plugins: [],
};
