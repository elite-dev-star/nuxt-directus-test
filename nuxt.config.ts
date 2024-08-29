// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-directus'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      directus: {
        url: "http://127.0.0.1:8055"
      }
    }
  }
})
