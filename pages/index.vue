<script setup lang="ts">
// @ts-ignore
import heroVideoUrl from '~/assets/video/hero_montage.mp4?url';
</script>

<template>
  <SectionHero :video="heroVideoUrl">
    <div class="flex flex-col items-center">
      <h1 class="text-7xl -mr-8 md:text-8xl md:-mr-12 lg:text-9xl lg:-mr-16 tracking-widest font-normal ">PLAY</h1>
      <p>is at the ❤️ of our games</p>
    </div>
  </SectionHero>
  <SectionBody>
    <h1 class="text-h1">GAMES</h1>
  </SectionBody>
</template>
