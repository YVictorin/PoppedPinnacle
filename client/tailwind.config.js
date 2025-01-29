import defaultColors from 'tailwindcss/colors';

const customColors = {
  ...defaultColors,
  "custom-green": {
    "500": "#55523D",
  },
  "custom-beige": {
    "500": "#E5D1B4"
  },
  "custom-navy": {
    "500": "#074271"
  },
  "custom-white": {
    "500": "#E8E9EB"
  }

};

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: customColors,
    },
  },
  plugins: [],
};
