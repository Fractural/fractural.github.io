<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <SectionBody class="my-32">
    <h1 class="text-section-title">
      {{ props.title }}
    </h1>
    <slot>Body</slot>
  </SectionBody>
</template>
