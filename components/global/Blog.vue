<template>
  <p class="text-lg leading-8 text-gray-600">Here are some of my thoughts, experiments, documents and things how
    I prefer to do it.</p>
  <div
    class="mx-auto mt-2 pt-2 sm:mt-10 sm:pt-10 grid grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <article v-for="post in posts" :key="post._id" class="flex max-w-xl flex-col items-start justify-between">
      <a :href="nuxtApp.$getUrl(post._path)">
        <div
          class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img :src="post.imageUrl" class="h-full w-full object-cover object-center"/>
        </div>
      </a>
      <div class="group relative w-full text-center">
        <h3 class="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
          <a :href="nuxtApp.$getUrl(post._path)">
            {{ post.title }}
          </a>
        </h3>
        <p class="mt-5 text-sm leading-6 text-gray-400 line-clamp-3">{{ post.description }}</p>
      </div>
      <div class="flex items-center gap-x-4 text-xs mt-6">
        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
        <Tags :tags="post.tags"/>
      </div>
    </article>
    <p v-if="posts.length === 0">No articles written yet. Please come back soon.</p>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const {data: posts} = await useAsyncData(
  'posts-list',
  () => queryContent('/blog')
    .where({layout: {$eq: "blog"}})
    .sort({date: 1})
    .find()
)
</script>
