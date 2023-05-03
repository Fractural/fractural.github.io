<script setup lang="ts">
import { spaceText } from '~/utils/format';

const props = defineProps({
  title: String
})

</script>

<template>
  <div class="px-16 py-8">
    <h1 class="text-3xl pb-4 tracking-wider font-medium">{{ props.title?.toUpperCase() }}</h1>
    <slot>Body</slot>
  </div>
</template>
