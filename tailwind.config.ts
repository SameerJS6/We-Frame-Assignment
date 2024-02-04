import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "display-2xl": ["40px", { fontWeight: 700, lineHeight: "60px" }],
        "display-xl": ["35px", { fontWeight: 600, lineHeight: "52.5px" }],
        "display-lg": ["30px", { fontWeight: 700, lineHeight: "36px" }],
        "display-md": [
          "28px",
          {
            fontWeight: 600,
            lineHeight: "42px",
          },
        ],
        "display-sm": ["24px", { fontWeight: 600, lineHeight: "36px" }],
        "title-xl": ["22px", { lineHeight: "26.4px" }],
        "title-lg": ["16px", { lineHeight: "24px" }],
        "title-md": ["17px", { fontWeight: 500, lineHeight: "20.4px" }],
        "label-xl": ["20px", { fontWeight: 600, lineHeight: "24px" }],
        "label-lg": ["18px", { lineHeight: "21.6px" }],
        "label-md": ["16px", { fontWeight: 600, lineHeight: "19.2px" }],
        "label-sm2": ["14px", { fontWeight: 600, lineHeight: "16.8px" }],
        "label-sm": ["14px", { fontWeight: 500, lineHeight: "19.1px" }],
        "label-xs2": ["12px", { fontWeight: 600, lineHeight: "14.4px" }],
        "label-xs": ["12px", { fontWeight: 400, lineHeight: "14.52px" }],
        "label-xxs": ["10px", { fontWeight: 500, lineHeight: "12px" }],
        "body-lg": ["20px", { fontWeight: 600, lineHeight: "30px" }],
        "body-md": ["17px", { fontWeight: 400, lineHeight: "25.5px" }],
      },
      transitionDuration: {
        "250": "250ms",
      },
      boxShadow: {
        "card-shadow": "box-shadow: 0px 0px 10.869564056396484px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
