import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  preflight: true,
  theme: {
    screens: {
      mb: '425px',
      tb: '768px',
      md: '991px',
      lg: '1400px',
    },
    extend: {
      width: {
        100: '100%',
      },
    },
    boxShadow: {
      'header': '0px 4px 35px rgba(0, 0, 0, 0.05)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    textColor: {
      primary: '#282858',
      secondary: '#64748B',
      blue: '#2563EB',
      yellow: '#FECC30',
      purple: '#8B5CF6',
      green: '#16A34A',
      orange: '#EA580C'
    }
  },
  shortcuts: {
    'title-h2': 'text-[#282858] text-30px md:text-45px leading-41px md:leading-61px font-sans font-700 <md:pt-26px pb-30px md:pb-55px',
    'button': 'text-20px leading-30px font-600 font-poppins',
    'default-label': 'text-[#64748B] text-14px leading-21px font-poppins pb-7px',
    'default-input': 'text-[#94A3B8] text-14px leading-21px font-poppins',
    'abs-vertical': 'absolute top-1/2 transform -translate-y-1/2',
    'abs-horizontal': 'absolute left-1/2 transform -translate-x-1/2',
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  }
})
