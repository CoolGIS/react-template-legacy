/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    // 是否预载基础样式
    preflight: true
  },
  plugins: []
}
