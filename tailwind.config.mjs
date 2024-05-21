/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "astro-red": "#df376e",
        "astro-pink": "#ee40ed",
        aquamarina: "hsl(171, 66%, 44%)",
        "clr-light-blue": "hsl(233, 100%, 69%)",
        grayish: "#4c545d",
        "clr-light-gray": "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        "landing-hm": "url('src/images/landing/bg-header-mobile.png')",
        "landing-hd": "url('src/images/landing/bg-header-desktop.png')",
        "insurance-nav":
          'url("src/images/insurance/bg-pattern-mobile-nav.svg")',
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
