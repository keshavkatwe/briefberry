import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ['44px', {
        fontWeight: 600,
        lineHeight: '48px',
        letterSpacing: '-1.5%'
      }],
      h2: ['40px', {
        fontWeight: 600,
        lineHeight: '44px',
        letterSpacing: '-1%'
      }],
      h3: ['32px', {
        fontWeight: 600,
        lineHeight: '36px',
        letterSpacing: '0'
      }],
      h4: ['28px', {
        fontWeight: 600,
        lineHeight: '34px',
        letterSpacing: '0'
      }],
      h5: ['24px', {
        fontWeight: 500,
        lineHeight: '30px',
        letterSpacing: '0'
      }]
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
