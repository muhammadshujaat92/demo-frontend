const { nextui } = require('@nextui-org/theme');
module.exports = {
  plugins: [nextui()],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sancoaleSoftened: ['Sancoale Softened', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-300px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out',
        'progress': 'progress 8s ease-out infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
  },
};
