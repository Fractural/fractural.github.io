import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindTypography from '@tailwindcss/typography';

const colors = {
  white: '#ffffff',
  'gray-light': `#B6B6B6`,
  'gray-dark': `#494949`,
  black: `#000000`,
};

export default <Partial<Config>>{
  theme: {
    extend: {
      colors,
    },
    letterSpacing: {
      wide: '0.1em',
      wider: '0.25em',
      widest: '0.5em',
    },
    fontSize: {
      '9xl': '9rem',
      '10xl': '10rem',
    }
  },
  plugins: [tailwindTypography],
};
