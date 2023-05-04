<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="bg-black text-white flex flex-col" style="min-height:100%">
    <Header />
    <NuxtPage class="flex-auto" />
    <Footer />
  </div>
</template>

<style lang="scss">
$xs: '320px';
$sm: '640px';
$md: '768px';
$lg: '1024px';
$xl: '1280px';
$_2xl: '1536px';

* {
  font-family: 'Raleway';
}

html,
body,
#__nuxt {
  height: 100%;
  min-height: 100%;
}

a.hover {
  @apply underline
}

.text-h1 {
  @apply text-3xl uppercase mt-16 mb-4 tracking-wide;
}

.text-section-title {
  @apply text-3xl pb-4 tracking-wide font-bold uppercase;
}

@media (min-width: $sm) {
  .text-section-title {
    @apply text-5xl font-medium tracking-wider;
  }
}

@media (min-width: $md) {
  .text-section-title {
    @apply text-6xl;
  }
}
</style>
