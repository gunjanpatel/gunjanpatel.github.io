<template>
  <slot />
  <div class="text-center h-full w-full text-xl lg:text-4xl">
    <slot name="shloka" />
    <div class="text-xs lg:text-xl">
      <slot name="shloka-meaning" />
    </div>
  </div>
</template>
<style>
#page-index-md {
  background-image: url("/img/background.jpg");
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    background-position-x: 8%;
  }
}
</style>
