<script setup lang="ts">
import { StyleValue } from 'nuxt/dist/app/compat/capi';
import getHeaderFooterHeight from '~/composables/getHeaderFooterHeight';

const props = defineProps({
  video: String,
  image: String,
  half: Boolean
})

const { headerHeight } = getHeaderFooterHeight();
const heroStyle = computed(() => <StyleValue>{
  height: `calc(${props.half ? `50vh` : "100vh"} - ${headerHeight.value}px)`
});

</script>


<template>
  <div class="relative" :style="heroStyle">
    <video v-if="props.video" loop muted autoplay class="absolute w-full h-full object-cover" :src="props.video"></video>
    <img v-if="props.image" class="absolute w-full h-full object-cover" :src="props.image">
    <div class="absolute w-full h-full bg-gradient-to-t from-black"></div>
    <div class="absolute px-8 xl:px-16 py-8 flex justify-center items-center w-full h-full">
      <slot>
        <h1>
          Overlay
        </h1>
      </slot>
    </div>
  </div>
</template>
