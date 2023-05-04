
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

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
  <Popover class="relative" v-slot="{ open, close }">
    <PopoverButton class="inline-flex items-center gap-x-1 text-xl tracking-wider font-medium text-white"
      @mouseover="(e) => hoverPopover(e, open)" @mouseleave="closePopover(close)">
      <span>GAMES</span>
      <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
    </PopoverButton>

    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
        @mouseover.prevent="popoverHover = true" @mouseleave.prevent="closePopover(close)">
        <div class="w-screen max-w-md flex-auto overflow-hidden bg-black text-sm leading-6 shadow-lg">
          <div class="p-4">
            <div v-for="item in solutions" :key="item.name" class="group relative flex gap-x-6 p-4 hover:bg-gray-700">
              <div
                class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black ring-2 ring-white  group-hover:bg-white">
                <component :is="item.icon" class="h-6 w-6 text-white group-hover:text-black" aria-hidden="true" />
              </div>
              <div>
                <a :href="item.href" class="font-semibold text-white">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-200">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
