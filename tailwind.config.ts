import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'], // 사용자 정의 폰트 패밀리
        // noto: ['sans-serif'], // 사용자 정의 폰트 패밀리
      },
      fontSize: {
        '24pt': '1.5rem',  // 24pt에 해당 (약 1.5rem, 24px)
        '32pt': '2rem',    // 32pt에 해당 (약 2rem, 32px)
        '40pt': '2.5rem',  // 40pt에 해당 (약 2.5rem, 40px)
      },
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