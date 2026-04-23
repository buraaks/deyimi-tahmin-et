<script setup lang="ts">
const { startGame } = useGame()
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
    <!-- Dekoratif ikon -->
    <div class="relative">
      <div class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 animate-pulse-slow">
        <UIcon
          name="i-lucide-book-open-text"
          class="w-12 h-12 text-primary"
        />
      </div>
      <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <UIcon
          name="i-lucide-sparkles"
          class="w-3.5 h-3.5 text-white"
        />
      </div>
    </div>

    <!-- Başlık -->
    <div class="space-y-3">
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Deyimi Tahmin Et
      </h1>
      <p class="text-lg text-muted max-w-md mx-auto leading-relaxed">
        Bir hikaye dinle, hangi Türkçe deyimi anlattığını tahmin et.
        Bilgi ve sezgini test etmeye hazır mısın?
      </p>
    </div>

    <!-- Başla butonu -->
    <UButton
      id="start-button"
      size="xl"
      icon="i-lucide-play"
      class="px-10 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
      @click="startGame"
    >
      Başla
    </UButton>

    <!-- Nasıl oynanır -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full pt-4">
      <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-elevated/50 ring-1 ring-default/30">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <UIcon
            name="i-lucide-headphones"
            class="w-5 h-5 text-primary"
          />
        </div>
        <p class="text-xs text-muted font-medium">
          Hikayeyi Dinle
        </p>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-elevated/50 ring-1 ring-default/30">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <UIcon
            name="i-lucide-lightbulb"
            class="w-5 h-5 text-primary"
          />
        </div>
        <p class="text-xs text-muted font-medium">
          Deyimi Düşün
        </p>
      </div>
      <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-elevated/50 ring-1 ring-default/30">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <UIcon
            name="i-lucide-check-circle"
            class="w-5 h-5 text-primary"
          />
        </div>
        <p class="text-xs text-muted font-medium">
          Tahminini Yaz
        </p>
      </div>
    </div>
  </div>
</template>
