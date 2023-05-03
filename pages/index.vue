<script setup lang="ts">
// @ts-ignore
import heroVideoUrl from '~/assets/video/hero_montage.mp4?url';
</script>

<template>
  <SectionHero :video="heroVideoUrl">
    <div class="flex flex-col items-center">
      <h1 class="text-9xl tracking-widest font-normal -mr-16">PLAY</h1>
      <p>is at the ❤️ of our games</p>
    </div>
  </SectionHero>
</template>
