import type { Config } from "tailwindcss";
import tailwindButtonVariants from "./plugins/tailwind-button-variants";
import tailwindInputVariants from "./plugins/tailwind-input-variants";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: [
        "44px",
        {
          fontWeight: 600,
          lineHeight: "48px",
          letterSpacing: "-1.5%",
        },
      ],
      h2: [
        "40px",
        {
          fontWeight: 600,
          lineHeight: "44px",
          letterSpacing: "-1%",
        },
      ],
      h3: [
        "32px",
        {
          fontWeight: 600,
          lineHeight: "36px",
          letterSpacing: "0",
        },
      ],
      h4: [
        "28px",
        {
          fontWeight: 600,
          lineHeight: "34px",
          letterSpacing: "0",
        },
      ],
      h5: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "30px",
          letterSpacing: "0",
        },
      ],
      body: [
        "16px",
        {
          lineHeight: "22px",
        },
      ],
      "body-lg": [
        "18px",
        {
          lineHeight: "24px",
        },
      ],
      small: [
        "12px",
        {
          lineHeight: "10px",
          fontWeight: 400,
          letterSpacing: "-1%",
        },
      ],
      hairline: [
        "13px",
        {
          lineHeight: "16px",
          fontWeight: 400,
        },
      ],
      button: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: 500,
          letterSpacing: "-1%",
        },
      ],
      hero: [
        "60px",
        {
          lineHeight: "60px",
          fontWeight: 500,
          letterSpacing: "-1.5%",
        },
      ],
      heading: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: 500,
        },
      ],
    },
    colors: {
      "background-transparent": "transparent",
      "background-surface1": "var(--background-surface1)",
      "background-surface2": "var(--background-surface2)",
      "background-surface3": "var(--background-surface3)",
      "background-surface4": "var(--background-surface4)",
      "background-dark1": "var(--background-dark1)",
      "background-dark2": "var(--background-dark2)",
      "background-primary": "var(--background-primary)",
      "background-highlight": "var(--background-highlight)",
      "background-subtle": "var(--background-subtle)",
      "background-overlay": "var(--background-overlay)",
      "text-primary": "var(--text-primary)",
      "text-primary-body": "var(--text-primary-body)",
      "text-secondary": "var(--text-secondary)",
      "text-tertiary": "var(--text-tertiary)",
      "text-light": "var(--text-light)",
      "text-blue": "var(--text-blue)",
      stroke1: "var(--stroke1)",
      "stroke-subtle": "var(--stroke-subtle)",
      green: "#00A656",
      blue: "var(--blue)",
      red: "var(--red)",
    },
    extend: {
      borderRadius: {
        "32": "32px",
        "16": "16px",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--instrument-sans)"],
      },
    },
  },
  plugins: [tailwindButtonVariants, tailwindInputVariants],
};
export default config;
