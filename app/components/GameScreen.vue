<script setup lang="ts">
const {
  currentStory,
  isAudioPlaying,
  audioError,
  userAnswer,
  playAudio,
  resetAudio,
  pauseAudio,
  submitAnswer
} = useGame()

function handleSubmit() {
  if (userAnswer.value.trim()) {
    submitAnswer()
  }
}
</script>

<template>
  <div class="flex flex-col items-center space-y-6 animate-fade-in w-full max-w-2xl mx-auto">
    <!-- Hikaye Başlığı -->
    <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-center">
      {{ currentStory?.title || 'Hikaye' }}
    </h2>

    <!-- Hikaye Metni — her zaman görünür -->
    <UCard class="w-full">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon
            name="i-lucide-book-open"
            class="w-5 h-5 text-primary"
          />
          <span class="font-semibold">Hikaye</span>
        </div>
      </template>

      <p class="text-sm sm:text-base leading-relaxed text-muted">
        {{ currentStory?.text || 'Hikaye metni bulunamadı.' }}
      </p>
    </UCard>

    <!-- Ses Kontrolü — başlat / durdur -->
    <UCard class="w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UIcon
            name="i-lucide-volume-2"
            class="w-5 h-5 text-primary"
          />
          <span class="font-medium text-sm">Sesi Dinle</span>
        </div>

        <div class="flex items-center gap-3">
          <!-- Hata mesajı -->
          <span
            v-if="audioError"
            class="text-xs text-error"
          >
            {{ audioError }}
          </span>

          <!-- Durum göstergesi -->
          <span
            v-if="isAudioPlaying"
            class="flex items-center gap-1.5 text-xs text-primary"
          >
            <span class="flex gap-0.5">
              <span
                class="w-1 h-3 bg-primary rounded-full animate-bounce"
                style="animation-delay: 0ms"
              />
              <span
                class="w-1 h-4 bg-primary rounded-full animate-bounce"
                style="animation-delay: 150ms"
              />
              <span
                class="w-1 h-2.5 bg-primary rounded-full animate-bounce"
                style="animation-delay: 300ms"
              />
              <span
                class="w-1 h-3.5 bg-primary rounded-full animate-bounce"
                style="animation-delay: 100ms"
              />
            </span>
            Oynatılıyor
          </span>

          <!-- Başlat butonu -->
          <UButton
            v-if="!isAudioPlaying"
            icon="i-lucide-play"
            size="sm"
            variant="soft"
            @click="playAudio"
          >
            Başlat
          </UButton>

          <!-- Durdur butonu -->
          <UButton
            v-else
            icon="i-lucide-pause"
            size="sm"
            variant="soft"
            color="warning"
            @click="pauseAudio"
          >
            Durdur
          </UButton>

          <!-- Sıfırla butonu -->
          <UButton
            icon="i-lucide-rotate-ccw"
            size="sm"
            variant="ghost"
            color="neutral"
            @click="resetAudio"
          >
            Sıfırla
          </UButton>
        </div>
      </div>
    </UCard>

    <!-- Tahmin Alanı — her zaman altta -->
    <UCard class="w-full">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon
            name="i-lucide-pencil"
            class="w-5 h-5 text-primary"
          />
          <span class="font-semibold">Tahminin</span>
        </div>
      </template>

      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col sm:flex-row gap-3">
          <UInput
            id="guess-input"
            v-model="userAnswer"
            placeholder="Hangi deyimi anlatıyor?"
            size="lg"
            icon="i-lucide-message-circle"
            class="flex-1"
          />

          <UButton
            id="submit-button"
            type="submit"
            size="lg"
            icon="i-lucide-send"
            :disabled="!userAnswer.trim()"
            class="sm:w-auto w-full"
          >
            Tahmin Et
          </UButton>
        </div>
      </form>
    </UCard>
  </div>
</template>
