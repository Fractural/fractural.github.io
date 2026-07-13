import tailwindcss from "@tailwindcss/vite";

// Social card settings
const title = 'Fractural';
const description = 'A small indie game developer.';
const image = 'https://fracturalstudios.com/meta_banner.png';
const url = 'https://fracturalstudios.com/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/icon"],

  app: {
    head: {
      title: "Fractural",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:site_name", content: title },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image:secure_url", content: image },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: { cssCodeSplit: true },
  },

  icon: {
    mode: "svg",
    clientBundle: {
      icons: [
        "mdi:menu",
        "mdi:chevron-down",
        "mdi:link",
      ],
    },
  },

  fonts: {
    defaults: { preload: true },
    families: [
      {
        name: "Raleway",
        provider: "google",
        weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      },
    ],
  },

  router: {
    options: { scrollBehaviorType: "smooth" },
  },
});
