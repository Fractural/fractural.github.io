// Social card settings
const title = 'Fractural';
const description = 'A small indie game developer.';
const image =
  'https://play-lh.googleusercontent.com/s05RWD_lCYpZjxoaxEpZFVQU4ClYv3_6_2KTqd1Imm8rMkDIXr-zxh6WlyNOkGOfgguo=w3840-h2160-rw';
const url = 'https://fracturalstudios.com/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // Basic configuration of the website
  app: {
    head: {
      title: 'Fractural',
      titleTemplate: '%s | Fractural',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Dario Tecchia' personal website!",
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        //Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: url },
      ],
      script: [
        {
          src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,ResizeObserver,WebAnimations,Object.fromEntries,Array.prototype.at',
        },
      ],
    },
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'nuxt-svgo'],
  googleFonts: {
    families: {
      // Urbanist: {
      //   wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      //   ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      // },
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    preload: true,
    download: true,
  },
  vite: {
    plugins: []
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/style/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
