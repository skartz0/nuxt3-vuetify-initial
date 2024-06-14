<template>
  <NuxtLayout>
    <v-app class="pt-10">
      <NuxtPage page-key="static" />
    </v-app>
  </NuxtLayout>
</template>
<script setup lang="ts">



useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const router = useRouter();

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

</script>
