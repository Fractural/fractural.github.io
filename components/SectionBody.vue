<script setup lang="ts">
import { useBreakpoint, aboveBreakpoint } from '~/composables/useBreakpoint';

const state = reactive({
  fullWidth: false
});
const { breakpoints } = useBreakpoint();
watchEffect(() => {
  state.fullWidth = aboveBreakpoint('xl', breakpoints.is);
});

const getBodyClass = computed(() => <any>{
  'w-full': state.fullWidth
});
</script>

<template>
  <div class="max-w-6xl mx-4 sm:mx-8 lg:mx-16 xl:mx-auto" :class="getBodyClass">
    <slot>Body</slot>
  </div>
</template>
