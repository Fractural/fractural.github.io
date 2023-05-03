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
* {
  font-family: 'Raleway';
  font-weight: 300;
}

html,
body,
#__nuxt {
  height: 100%;
  min-height: 100%;
}
</style>
