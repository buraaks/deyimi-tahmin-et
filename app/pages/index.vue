<script setup lang="ts">
const { phase } = useGame()

useSeoMeta({
  title: 'Deyimi Tahmin Et — Türkçe Deyim Oyunu',
  description: 'Bir hikaye dinle, hangi Türkçe deyimi anlattığını tahmin et. Eğlenceli ve eğitici bir kelime oyunu.',
  ogTitle: 'Deyimi Tahmin Et',
  ogDescription: 'Hikaye dinle, deyimi bil! Türkçe deyim bilgini test et.'
})
</script>

<template>
  <UContainer class="min-h-[calc(100vh-10rem)] flex items-center justify-center py-12">
    <div class="w-full max-w-2xl">
      <Transition
        name="phase"
        mode="out-in"
      >
        <!-- Ana Sayfa -->
        <GameHero
          v-if="phase === 'idle'"
          key="idle"
        />

        <!-- Oyun Ekranı: metin + ses + tahmin hep birlikte -->
        <GameScreen
          v-else-if="phase === 'playing'"
          key="playing"
        />

        <!-- Sonuç -->
        <GameResult
          v-else-if="phase === 'result'"
          key="result"
        />
      </Transition>
    </div>
  </UContainer>
</template>
