<script setup>
const { goHome } = useGame()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'tr'
  }
})

const title = 'Deyimi Tahmin Et'
const description = 'Bir hikaye dinle, hangi Türkçe deyimi anlattığını tahmin et. Eğlenceli ve eğitici bir kelime oyunu.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <button
          class="flex items-center gap-2 group cursor-pointer"
          @click="goHome"
        >
          <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <UIcon
              name="i-lucide-book-open-text"
              class="w-4.5 h-4.5 text-primary"
            />
          </div>
          <span class="font-bold text-lg tracking-tight">Deyimi Tahmin Et</span>
        </button>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/buraaks/deyimi-tahmin-et"
          target="_blank"
          aria-label="GitHub"
        />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
