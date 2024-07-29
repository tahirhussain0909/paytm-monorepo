import type { Config } from "tailwindcss";
import sharedConfig from "@venmo/ui/tailwind.config";

const config: Config = {
  presets: [sharedConfig],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
