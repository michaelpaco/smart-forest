import i18n from './config/i18n'

export default {
  target: 'static',
  head: {
    title: 'Smart Forest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [
    { src: '~/plugins/sweetAlert.js', ssr: false }
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-i18n', '@nuxtjs/dotenv', '@nuxtjs/firebase'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'pt',
        file: 'pt.js'
      }
    ],
    vueI18n: i18n,
    langDir: 'i18n/',
    defaultLocale: 'pt'
  },
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true
    }
  },
  axios: {},
  pwa: {
    manifest: {
      lang: 'pt'
    }
  },
  build: {},
  router: {
    middleware: 'auth'
  }
}

// marrom#9A6D38  verde #1D6600
