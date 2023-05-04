<script setup lang="ts">
import { spaceText } from '~/composables/format';

const props = defineProps({
  title: String
})
</script>

<template>
  <SectionBody class="my-32">
    <h1 class="text-6xl pb-4 tracking-wider font-medium">{{ props.title?.toUpperCase() }}</h1>
    <slot>Body</slot>
  </SectionBody>
</template>
