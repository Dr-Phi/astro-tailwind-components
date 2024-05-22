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
        darkBlue: "#2c2640",
      },
      backgroundImage: {
        "landing-hm": "url('src/images/landing/bg-header-mobile.png')",
        "landing-hd": "url('src/images/landing/bg-header-desktop.png')",
        "insurance-nav":
          'url("src/images/insurance/bg-pattern-mobile-nav.svg")',
        "insurance-imgm": 'url("src/images/insurance/image-intro-mobile.jpg")',
        "insurance-imgd": 'url("src/images/insurance/image-intro-desktop.jpg")',
        "insurance-introlm":
          'url("src/images/insurance/bg-pattern-intro-left-mobile.svg")',
        "insurance-introrm":
          'url("src/images/insurance/bg-pattern-intro-right-mobile.svg")',
        "insurance-introld":
          'url("src/images/insurance/bg-pattern-intro-left-desktop.svg")',
        "insurance-intrord":
          'url("src/images/insurance/bg-pattern-intro-right-desktop.svg")',
        "insurance-howm":
          'url("src/images/insurance/bg-pattern-how-we-work-mobile.svg")',
        "insurance-howd":
          'url("src/images/insurance/bg-pattern-how-we-work-desktop.svg")',
        "insurance-footerm":
          'url("src/images/insurance/bg-pattern-footer-mobile.svg")',
        "insurance-footerd":
          'url("src/images/insurance/bg-pattern-footer-desktop.svg")',
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
