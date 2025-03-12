// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'volkhov': ['Volkhov', 'serif']
        }
      },
      plugins: [
        require('tailwind-scrollbar-hide')
      ]
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://cdn-icons-png.flaticon.com/512/5219/5219577.png' 
        }
      ]
    }
  }
});
