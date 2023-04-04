// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: "monokai",
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'php']
    }
  },
  extends: [
    process.env.THEME_ELEMENTS ||  '@nuxt-themes/elements',
    process.env.THEME_TYPOGRAPHY || '@nuxt-themes/typography'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-config-schema',
    '@nuxthq/studio'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  }
})
