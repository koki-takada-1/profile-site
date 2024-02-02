import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
    // screens: {
    //   'xs': '400px', // 400px以上
    //   'sm': { 'min': '400px', 'max': '599px' }, // 400px以上600px未満
    //   'md': { 'min': '600px', 'max': '799px' }, // 600px以上800px未満
    //   'lg': { 'min': '800px', 'max': '999px' }, // 800px以上1000px未満
    //   'xl': { 'min': '1000px', 'max': '1199px' }, // 1000px以上1200px未満
    //   '2xl': '1200px', // 1200px以上
    // },
  },
  plugins: [],
}
export default config
