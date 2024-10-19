import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: '#F0F0F0',
        text: '#F8F8F8',
        normal: '#253397',
        point: '#000E75',
        selection: '#5D68BA',
      },
    },
  },
  plugins: [],
};
export default config;