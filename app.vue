<template>
  <NuxtPage />
</template>
<script setup>

useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

const nuxtApp = useNuxtApp()

nuxtApp.provide(
  'getUrl',
  function (slug) {
    slug = slug.replace(/^\/+/, '');

    return process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}${slug}` : `/${slug}`
  }
)
</script>
<style>
pre {
  background-color: #1e293b;
  padding: 1em;
  margin: 1em 0 1em 0;
}
h2 {
  font-size: 30px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 18px;
}
h2, h3, h4, h5
{
  margin-bottom: .5em;
  font-weight: bold;
}
hr {
  margin: 1em 0 1em 0;
}
</style>
