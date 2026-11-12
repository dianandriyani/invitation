export default defineNuxtConfig({
  compatibilityDate: '2026-11-12',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      title: 'EVERFORM — Every story deserves its own form',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#f5f2eb' },
        { name: 'description', content: 'An experimental digital invitation experience.' },
      ],
    },
  },
})
