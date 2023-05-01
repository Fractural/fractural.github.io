// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Fractural',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Dario Tecchia' personal website!",
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
    },
    baseURL: '',
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Urbanist: {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          },
          Raleway: {
            wght: [200],
          },
        },
        preload: true,
      },
    ],
  ],
  css: ['bootstrap-vue-3/dist/bootstrap-vue-3.css', '@/assets/style/main.scss'],
});
