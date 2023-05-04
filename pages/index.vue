<script setup lang="ts">
import heroVideoUrl from '~/assets/video/hero_montage.mp4?url';
import games from '~/composables/games';
import { useBreakpoint, aboveBreakpoint } from '~/composables/useBreakpoint';

const { breakpoints } = useBreakpoint();

const getGamesGridStyle = computed(() => {
  let width = '17em';
  if (aboveBreakpoint('xsm', breakpoints.is))
    width = '20em';
  return <any>{
    'grid-template-columns': `repeat(auto-fit, minmax(${width}, 2fr))`,
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
      <a v-for="game in games" class="relative w-full group overflow-hidden" :href="game.url" target="_blank">

        <img :src="game.image"
          class="absolute top-0 left-0 transition duration-200 ease-out scale-100 group-hover:scale-105 object-cover w-full h-full">
        <div class="absolute bg-gradient-to-t from-black from-50% w-full h-full"></div>

        <div class="relative w-full p-8 flex flex-col" style="height: calc(100% - 20rem); margin-top: 20rem;">
          <span class="block font-bold uppercase tracking-wider">{{ game.title }}</span>
          <span class="block mb-10 flex-1">{{ game.description }}</span>
          <div class="flex flex-row flex-wrap gap-2">
            <img v-if="game.platforms.includes('googlePlay')" src="~/assets/images/googleplay_badge.png"
              class="h-4 xs:h-8 lg:h-10">
            <img v-if="game.platforms.includes('appStore')" src="~/assets/images/appstore_badge.png"
              class="h-4 xs:h-8 lg:h-10">
            <img v-if="game.platforms.includes('steam')" src="~/assets/images/steam_badge.png" class="h-4 xs:h-8 lg:h-10">
            <img v-if="game.platforms.includes('itchio')" src="~/assets/images/itchio_badge.png"
              class="h-4 xs:h-8 lg:h-10">
          </div>
        </div>
      </a>
    </div>
  </SectionBody>
</template>
