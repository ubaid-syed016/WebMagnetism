/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure 'sans-serif' is included correctly
      },
      colors: {
        'text-color': '#433E47',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
