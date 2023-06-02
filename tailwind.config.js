/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E5724D',
        secondary: '#181B24',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
  daisyui: {
    themes: [
      {
        primary: {
          primary: "#E5724D",
          secondary: "#6ee7b7",
          accent: "#D99330",
          neutral: "#ea580c",
          "base-100": "#181B24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      }
    ]
  }
}

