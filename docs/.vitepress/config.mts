import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dana Hua",
  description: "Software Engineer Portfolio",
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Tech", link: "/tech" },
      { text: "Photography", link: "/photos" },
      // { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Tech",
        link: "/tech",
      },
      {
        text: "Photography",
        link: "/photos",
      },
      // {
      //   text: "About",
      //   link: "/About",
      // },
    ],

    socialLinks: [{ icon: "linkedin", link: "https://www.linkedin.com/in/huadana1/" }],
  },
});
