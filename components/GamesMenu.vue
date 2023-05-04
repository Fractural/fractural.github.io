
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import games from '~/composables/games';

const popoverHover = ref(false)
const popoverTimeout = ref(null)

const hoverPopover = (e, open) => {
  popoverHover.value = true
  if (!open) e.target.click()
}

const closePopover = (close) => {
  popoverHover.value = false
  if (popoverTimeout.value) clearTimeout(popoverHover.value)
  popoverTimeout.value = setTimeout(() => {
    if (!popoverHover.value) close()
  }, 100)
}
</script>


<template>
  <Popover class="relative my-auto" v-slot="{ open, close }">
    <PopoverButton
      class="inline-flex items-center gap-x-1 text-xl tracking-wider font-medium text-white hover:text-gray-300"
      @mouseover="(e) => hoverPopover(e, open)" @mouseleave="closePopover(close)">
      <span>GAMES</span>
      <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
    </PopoverButton>

    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute left-52 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 drop-shadow-2xl"
        @mouseover.prevent="popoverHover = true" @mouseleave.prevent="closePopover(close)">
        <div class="w-screen max-w-md flex flex-col flex-auto overflow-hidden bg-black text-sm leading-6 shadow-lg">
          <div v-for="item in games" :key="item.title"
            class="group relative flex hover:bg-gray-700 h-full group transition-all duration-200 ease-out">
            <div class="w-32 overflow-hidden">
              <img :src="item.image"
                class="transition-all duration-200 ease-out scale-100 group-hover:scale-105 object-cover w-32 h-full">
            </div>
            <div class="py-4 px-8">
              <a :href="item.url" target="_blank" class="font-semibold text-white">
                {{ item.title }}
                <span class="absolute inset-0" />
              </a>
              <p class="mt-1 text-gray-200">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
