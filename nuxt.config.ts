import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt App',
      meta: [
        { name: 'description', content: 'My awesome Nuxt application' },
        { name: 'keywords', content: 'nuxt, vue, vuetify, web development' },
        { property: 'og:title', content: 'Nuxt App' },
        { property: 'og:description', content: 'My awesome Nuxt application' },
        { property: 'og:image', content: '/path/to/og-image.png' }
      ],
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    './assets/scss/_colors.scss',
    './assets/scss/main.scss',
    
  ],
  build: {
    transpile: ['vuetify']
  },

  devtools: { enabled: true },

})
