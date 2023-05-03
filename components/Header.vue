<script setup lang="ts">
import { spaceText } from '~/composables/format';
// @ts-ignore
import Logo from '~/assets/svg/logo48.svg';

</script>

<template>
  <div id="header" class="p-16 pb-8">
    <div class="flex flex-row gap-8 align-middle">
      <Logo class="flex-shrink-0" />
      <h1 class="text-4xl my-auto tracking-widest">
        FRACTURAL
      </h1>
      <NuxtLink class="text-2xl my-auto tracking-wider font-medium" to="/">HOME</NuxtLink>
      <NuxtLink class="text-2xl my-auto tracking-wider font-medium" to="games">GAMES</NuxtLink>
      <NuxtLink class="text-2xl my-auto tracking-wider font-medium" to="about">ABOUT</NuxtLink>
    </div>
  </div>
</template>
