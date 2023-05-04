<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/20/solid'
// @ts-ignore
import alanPicture from "~/assets/pictures/alan.png";

const members = [
  {
    name: "Alan Tong",
    picture: alanPicture,
    description: "Alan founded the studio back in high school and has been releasing games for it ever since. He's a jack-of-all trades, having interests in programming, digital art, and music. When he's not busy with college work, he enjoys contributing to open source projects and doodling on his iPad.",
    role: "Founder",
    url: "https://atlinx.net"
  }
];
</script>

<template>
  <div>
    <SectionHeader title="About">
      <p>Who are we and what do we do?</p>
    </SectionHeader>
    <SectionBody>
      <h1 class="text-h1">MISSION</h1>
      <p>To build polished and immersive experiences that are fun and fair</p>
      <h1 class="text-h1">TEAM</h1>
      <div v-for="member in members">
        <div class="flex flex-row gap-4">
          <img class="rounded-full w-32" :src="member.picture">
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4">
              <h1 class="font-bold upper">{{ member.name }}</h1>
              <span class="rounded-full px-4 ring-1 ring-white">{{ member.role }}</span>
              <a class="px-4" :href="member.url" target="_blank">
                <LinkIcon class="w-4 h-4 mr-2 inline-block" />
                <span>{{ member.url }}</span>
              </a>
            </div>
            <span>{{ member.description }}</span>
          </div>
        </div>
      </div>
    </SectionBody>
  </div>
</template>
