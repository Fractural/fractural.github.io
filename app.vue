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

<style>
@import "~/assets/css/core.css";
</style>
