<script setup lang="ts">
import { StyleValue } from 'nuxt/dist/app/compat/capi';
import { fromURL } from '~/utils/format'

const state = reactive({ headerHeight: 0 });
const props = defineProps({
  video: String,
  image: String
})

onMounted(() => {
  const header = document.getElementById('header');
  state.headerHeight = header?.clientHeight ?? 0;
  console.log(header, state.headerHeight);
});

const heroStyle = computed(() => <StyleValue>{
  height: `calc(100vh - ${state.headerHeight}px)`
});

</script>


<template>
  <div class="hero" :style="heroStyle">
    <video v-if="props.video" loop muted autoplay class="hero-bg"
      :src="require('~/assets/video/hero_montage.mp4')"></video>
    <img v-if="props.image" class="hero-bg" :src="require(props.image)">
    <div class="hero-dim"></div>
    <div class="px-16 py-8 hero-content flex justify-center items-center">
      <slot>
        <h1>
          Overlay
        </h1>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.hero-content {
  width: 100%;
  height: 100%;
  position: absolute;
}

.hero-dim {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';

  /* Any overlay color that you want, here I use black with 25% opacity */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 100%)
}

.hero {
  position: relative;
  width: 100%;
}
</style>
