/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#81D8F7',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          400: '#7C7C8A',
          800: '#202024',
          900: '#121214',
        },
      },
    },
  },
  plugins: [],
};
