import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#404447",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
