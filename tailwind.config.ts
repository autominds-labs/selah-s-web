import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",       // ✅ catch ALL src files (pages/components/app/etc)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // ✅ if you ever have app at project root
    "./components/**/*.{js,ts,jsx,tsx,mdx}" // ✅ if you ever have components at project root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
