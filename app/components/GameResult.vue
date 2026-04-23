<script setup lang="ts">
const {
  isCorrect,
  isClose,
  currentStory,
  userAnswer,
  startGame,
  goHome
} = useGame()
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-6 animate-fade-in">
    <UCard
      class="w-full max-w-lg overflow-hidden"
      :ui="{ header: 'p-0' }"
    >
      <!-- Sonuç başlık bandı -->
      <template #header>
        <div
          class="flex items-center gap-3 px-6 py-4"
          :class="isCorrect
            ? 'bg-success/10'
            : isClose
              ? 'bg-warning/10'
              : 'bg-error/10'"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            :class="isCorrect
              ? 'bg-success/20'
              : isClose
                ? 'bg-warning/20'
                : 'bg-error/20'"
          >
            <UIcon
              :name="isCorrect
                ? 'i-lucide-party-popper'
                : isClose
                  ? 'i-lucide-target'
                  : 'i-lucide-x-circle'"
              class="w-7 h-7"
              :class="isCorrect
                ? 'text-success'
                : isClose
                  ? 'text-warning'
                  : 'text-error'"
            />
          </div>
          <div class="text-left">
            <h3
              class="text-lg font-bold"
              :class="isCorrect ? 'text-success' : isClose ? 'text-warning' : 'text-error'"
            >
              {{ isCorrect ? 'Doğru Bildin! 🎉' : isClose ? 'Çok Yaklaştın! 🎯' : 'Yanlış Cevap 😔' }}
            </h3>
            <p class="text-sm text-muted">
              {{ isCorrect ? 'Harika, devam et!' : isClose ? 'Neredeyse biliyordun!' : 'Bir dahaki sefere!' }}
            </p>
          </div>
        </div>
      </template>

      <div class="space-y-5">
        <!-- Kullanıcı cevabı -->
        <div class="p-3 rounded-lg bg-elevated/50 ring-1 ring-default/20">
          <span class="text-xs text-muted">Senin cevabın:</span>
          <p class="font-medium mt-0.5">
            {{ userAnswer }}
          </p>
        </div>

        <!-- Doğru cevap -->
        <div
          class="p-4 rounded-xl ring-1"
          :class="isCorrect
            ? 'bg-success/5 ring-success/20'
            : 'bg-primary/5 ring-primary/20'"
        >
          <span class="text-xs text-muted">Doğru cevap:</span>
          <p
            class="text-xl font-bold mt-1"
            :class="isCorrect ? 'text-success' : 'text-primary'"
          >
            {{ currentStory?.idiom }}
          </p>
        </div>

        <!-- Hikaye metni -->
        <div
          v-if="currentStory?.text"
          class="p-3 rounded-lg bg-elevated/30 ring-1 ring-default/10 text-left"
        >
          <div class="flex items-center gap-1.5 mb-1.5">
            <UIcon
              name="i-lucide-book-open"
              class="w-3.5 h-3.5 text-muted"
            />
            <span class="text-xs text-muted">Hikaye</span>
          </div>
          <p class="text-xs text-muted leading-relaxed italic">
            "{{ currentStory.text }}"
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-center gap-3">
          <UButton
            variant="outline"
            icon="i-lucide-home"
            @click="goHome"
          >
            Ana Sayfa
          </UButton>
          <UButton
            id="play-again-button"
            icon="i-lucide-rotate-ccw"
            @click="startGame"
          >
            Yeni Hikaye
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
