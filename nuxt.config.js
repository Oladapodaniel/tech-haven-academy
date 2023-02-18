export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'tech-haven',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/tailwind',
    '~plugins/toast',
    '~plugins/inject'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-lazy-load', {
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      directiveOnly: true,
    }],
    "vue-toastification/nuxt",

    // You can also pass plugin options
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
