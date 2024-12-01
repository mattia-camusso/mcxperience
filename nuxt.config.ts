// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      title: "MC Xperience",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        //{ rel: "icon", type: "image/svg", href: "_nuxt/assets/favicon.ico" },
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@pinia/nuxt", "@hypernym/nuxt-anime", "@vueuse/nuxt"],
  /*   ui: {
    global: true,
  }, */
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
