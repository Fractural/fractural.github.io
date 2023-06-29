<script setup lang="ts">
import { StyleValue } from 'nuxt/dist/app/compat/capi';
import getHeaderFooterHeight from '~/composables/getHeaderFooterHeight';

const props = defineProps<{
  video: string;
  image: string;
  half: boolean;
  thumbnail: string;
}>();

const heroVideo = ref<HTMLVideoElement>();
const lowPowerMode = ref(true);
onMounted(() => {
  if (!heroVideo.value) return;
  heroVideo.value.play().then(() => {
    lowPowerMode.value = false;
  });
});

const { headerHeight } = getHeaderFooterHeight();
const heroStyle = computed(
  () =>
    <StyleValue>{
      height: `calc(${props.half ? `50vh` : '100vh'} - ${
        headerHeight.value
      }px)`,
    }
);
</script>

<template>
  <div class="relative" :style="heroStyle">
    <video
      ref="heroVideo"
      :class="{
        hidden: !(props.video && !lowPowerMode),
      }"
      loop
      muted
      autoplay
      class="absolute w-full h-full object-cover"
      :src="props.video"
    ></video>
    <img
      :class="{
        hidden: !(
          props.image &&
          (!props.video || (props.video && lowPowerMode))
        ),
      }"
      class="absolute w-full h-full object-cover"
      :src="props.image"
    />
    <div class="absolute w-full h-full bg-gradient-to-t from-black"></div>
    <div
      class="absolute px-8 xl:px-16 py-8 flex justify-center items-center w-full h-full"
    >
      <slot>
        <h1>Overlay</h1>
      </slot>
    </div>
  </div>
</template>
