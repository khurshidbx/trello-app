export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "trello-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/main.css", "element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["./plugins/vuednd.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  plugins: ["@/plugins/element-ui"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // ssr: false,
  ssr: false,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
