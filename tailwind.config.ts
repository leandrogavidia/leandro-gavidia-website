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
        'gradient-zinc': 'linear-gradient(360deg, rgb(9, 9, 11), rgb(24, 24, 27))'
      },
      backgroundColor: {
        'default': "#000"
      },
      textColor: {
        "default": "#fff"
      },
      fontFamily: {
        poppins: "Poppins"
      }
    },
  },
  plugins: [],
}
export default config
