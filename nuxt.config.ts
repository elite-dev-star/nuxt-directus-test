export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-directus'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      directus: {
        url: 'http://localhost:8055/',
        devtools: true,
        cookieMaxAge: 10000,
      },
    }
  }
});
