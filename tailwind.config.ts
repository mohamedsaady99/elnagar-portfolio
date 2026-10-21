import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        elnagar: {
          ink: '#111715',
          forest: '#19201d',
          cream: '#F2EFE8',
          paper: '#E8E3D9',
          gold: '#C3A16E',
          'gold-light': '#DDC39A',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 80px rgba(195, 161, 110, 0.16)',
      },
    },
  },
  plugins: [],
};
export default config;
