<template>
  <Default>
    <div class="grid grid-cols-4 items-start">
      <div class="blog-page col-span-4 md:col-span-3 lg:col-span-3 lg:pr-8">
        <slot/>
      </div>
      <div
        class="mt-10 md:mt-0 lg:mt-0 col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 lg:pl-10 lg:border-l-2 lg:border-gray-800">
        <Sidebar/>
      </div>
    </div>
  </Default>
</template>
<script setup>
import Default from "~/layouts/default.vue";

const {page} = useContent()
</script>
<style>
.blog-page {
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

  h2, h3, h4, h5 {
    margin-bottom: .5em;
    font-weight: bold;
  }

  hr {
    margin: 1em 0 1em 0;
  }
}
</style>
