<script setup>
import Footer from '~/components/global/Footer.vue';
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `SouTravel` },
    { name: 'description', content: 'SouTravel is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
  ],
  title: `SouTravel`,
})
</script>

<template>
  <main class="max-w-8xl">
    <slot/>
    <Footer />
  </main>
</template>
