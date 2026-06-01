// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Dharmes Oraon Memorial Foundation',
      titleTemplate: '%s · Dharmes Oraon Memorial Foundation',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'description',
          content:
            'The Dharmes Oraon Memorial Foundation advances education, healthcare, and tribal development through long-term, community-led programmes rooted in transparency and measurable impact.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap'
        }
      ]
    }
  }
})
