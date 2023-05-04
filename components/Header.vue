<script setup lang="ts">
import { spaceText } from '~/composables/format';
// @ts-ignore
import Logo from '~/assets/svg/logo.svg';
import FlyoutMenu from './FlyoutMenu.vue';
import { Bars2Icon } from '@heroicons/vue/20/solid';

const links = [
  "games",
  "about"
]
</script>

<template>
  <div id="header" class="p-4 sm:p-8 lg:p-16 pb-8">
    <div class="flex flex-row gap-6">
      <NuxtLink class="flex flex-row gap-4 hover:text-gray-300 fill-white hover:fill-gray-300" to="/">
        <Logo class="flex-shrink-0 w-8 md:w-12 " />
        <h1 class=" md:text-2xl my-auto tracking-widest hover:no-underline">
          FRACTURAL
        </h1>
      </NuxtLink>
      <!-- Header -->
      <div class="hidden md:flex flex-row gap-6">
        <NuxtLink v-for="link in links"
          class="text-xl my-auto tracking-wider font-medium hover:text-gray-300 no-underline uppercase" :to="link">{{
            link }}</NuxtLink>
      </div>
      <!-- Hamburger -->
      <div class="md:hidden flex fle-row gap-6">
        <button>
          <Bars2Icon class="w-8 h-8" />
        </button>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>
