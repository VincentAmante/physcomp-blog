// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    'nuxt-content-assets', // ! Keep before @nuxt-content
    '@nuxt/content'
  ],
  build: {
    transpile: [
      'trpc-nuxt',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons'
    ]
  },
  typescript: {
    shim: false
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  tailwindcss: {
    cssPath: '~/assets/styles/main.css'
  }
})
