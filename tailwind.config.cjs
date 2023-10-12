const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dh-red": "#E72250",
        "dh-yellow": "#F8D13D",
        "dh-blue": "#2D9AEA",
      },
    },
  },
  plugins: [
    require("tailwindcss-text-fill-stroke")(),
    require("@headlessui/tailwindcss"),
  ],
};
