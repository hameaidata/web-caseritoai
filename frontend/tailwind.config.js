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
        primary: {
          50: '#E7EBEE',
          100: '#C5D3DD',
          200: '#A3BBCC',
          300: '#81A3BB',
          400: '#5F8BAA',
          500: '#2C4257',
          600: '#1E2E3D',
          700: '#161F28',
          800: '#0E1013',
        },
        secondary: {
          50: '#E5EDE8',
          100: '#C5D9CC',
          200: '#A5C5B0',
          300: '#85B194',
          400: '#659078',
          500: '#3F6F56',
          600: '#2F523F',
          700: '#1F3528',
          800: '#0F1811',
        },
        danger: {
          50: '#F1E5E5',
          100: '#DCC4C4',
          200: '#C7A3A3',
          300: '#B28282',
          400: '#9D6161',
          500: '#A34444',
          600: '#7B3333',
          700: '#532222',
          800: '#2B1111',
        },
        warning: {
          50: '#F3ECDE',
          100: '#E5D4B3',
          200: '#D7BC88',
          300: '#C9A45D',
          400: '#BB8C32',
          500: '#A97A35',
          600: '#805D28',
          700: '#57401B',
          800: '#2E230E',
        },
      },
      backgroundColor: {
        base: '#FAFAF9',
        surface: '#FFFFFF',
      },
      borderColor: {
        default: '#E5E3DF',
      },
      textColor: {
        primary: '#0F172A',
        secondary: '#64748B',
      },
    },
  },
  plugins: [],
};
