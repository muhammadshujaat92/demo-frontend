const {nextui} = require('@nextui-org/theme');
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
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      }
    },
  },
};
