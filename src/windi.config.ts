import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  preflight: true,
  theme: {
    boxShadow: {
      'header': '0px 4px 35px rgba(0, 0, 0, 0.05)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    textColor: {
      'blue': '#2563EB',
      'primary': '#282858',
      'secondary': '#64748B',
      'yellow': '#020202'
    }
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  }
})
