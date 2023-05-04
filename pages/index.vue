<script setup lang="ts">
import heroVideoUrl from '~/assets/video/hero_montage.mp4?url';
import games from '~/composables/games';
import { useBreakpoint, aboveBreakpoint } from '~/composables/useBreakpoint';

const { breakpoints } = useBreakpoint();

const getGamesGridStyle = computed(() => {
  return <any>{
    'grid-template-columns': `repeat(auto-fit, minmax(${aboveBreakpoint('md', breakpoints.is) ? '20em' : '15em'}, 2fr))`,
  };
});
</script>

<template>
  <SectionHero :video="heroVideoUrl">
    <div class="flex flex-col items-center">
      <h1
        class="text-5xl -mr-6 xs:text-6xl xs:-mr-8 sm:text-7xl sm:-mr-10 md:text-8xl md:-mr-12 lg:text-9xl lg:-mr-16 tracking-widest font-normal ">
        PLAY</h1>
      <p>is at the ❤️ of our games</p>
    </div>
  </SectionHero>
  <SectionBody>
    <h1 class="text-section-title mt-16 md:mb-8">GAMES</h1>
    <div class="grid items-stretch gap-4" :style="getGamesGridStyle">
      <a v-for="game in games" class="relative h-128 w-full group overflow-hidden" :href="game.url" target="_blank">
        <img :src="game.image"
          class="absolute transition duration-200 ease-out scale-100 group-hover:scale-105 object-cover w-full h-full">
        <div class="absolute bg-gradient-to-t from-black w-full h-full"></div>
        <div class="absolute w-full p-8 h-1/2 top-1/2">
          <span class="block font-medium uppercase tracking-wider">{{ game.title }}</span>
          <span class="block">{{ game.description }}</span>
        </div>
      </a>
    </div>
  </SectionBody>
</template>
