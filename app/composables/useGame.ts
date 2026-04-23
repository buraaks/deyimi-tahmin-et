import { stories, type Story } from '~/data/stories'

/** Oyun durumu tipleri */
export type GamePhase = 'idle' | 'playing' | 'result'

/**
 * Levenshtein mesafesi hesapla
 * İki string arasındaki minimum düzenleme (ekleme, silme, değiştirme) sayısını döndürür.
 */
function levenshteinDistance(a: string, b: string): number {
  const m = a.length
  const n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array<number>(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i]![0] = i
  for (let j = 0; j <= n; j++) dp[0]![j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]!
      } else {
        dp[i]![j] = 1 + Math.min(
          dp[i - 1]![j]!,
          dp[i]![j - 1]!,
          dp[i - 1]![j - 1]!
        )
      }
    }
  }
  return dp[m]![n]!
}

/**
 * Türkçe karakterleri ASCII karşılıklarına dönüştür
 */
function normalizeTurkish(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/û/g, 'u')
}

/**
 * Kullanıcı cevabını doğru cevapla karşılaştır
 */
export function checkAnswer(userInput: string, correctAnswer: string) {
  const normalizedInput = normalizeTurkish(userInput)
  const normalizedAnswer = normalizeTurkish(correctAnswer)

  const isCorrect = normalizedInput === normalizedAnswer
  const distance = levenshteinDistance(normalizedInput, normalizedAnswer)

  const threshold = Math.max(2, Math.floor(normalizedAnswer.length * 0.25))
  const isClose = !isCorrect && distance <= threshold

  return { isCorrect, isClose, distance }
}

/**
 * useGame composable
 *
 * useState tercih edildi çünkü:
 *  - SSR uyumlu
 *  - Bu ölçekte Pinia'ya gerek yok
 *  - Reactive ve type-safe
 */
export function useGame() {
  // --- Reactive State ---
  const phase = useState<GamePhase>('game-phase', () => 'idle')
  const currentStory = useState<Story | null>('current-story', () => null)
  const userAnswer = useState<string>('user-answer', () => '')
  const isCorrect = useState<boolean>('is-correct', () => false)
  const isClose = useState<boolean>('is-close', () => false)
  const isAudioPlaying = useState<boolean>('is-audio-playing', () => false)
  const audioError = useState<string | null>('audio-error', () => null)

  const lastStoryId = useState<number | null>('last-story-id', () => null)

  // Audio elementi (sadece client-side)
  let audioElement: HTMLAudioElement | null = null

  /**
   * Rastgele hikaye seç — üst üste aynı hikaye gelmez
   */
  function pickRandomStory(): Story {
    const pool = stories.length > 1
      ? stories.filter(s => s.id !== lastStoryId.value)
      : stories

    const index = Math.floor(Math.random() * pool.length)
    return pool[index]!
  }

  /** Sesi başlat (manuel) */
  function playAudio() {
    if (!currentStory.value) return
    if (typeof window === 'undefined') return

    audioError.value = null

    // Zaten bir element varsa ve aynı src ise, devam ettir
    if (audioElement && !audioElement.ended) {
      audioElement.play().catch(() => {
        audioError.value = 'Ses çalınamadı.'
      })
      isAudioPlaying.value = true
      return
    }

    // Yeni audio element oluştur
    audioElement = new Audio()
    audioElement.preload = 'auto'

    audioElement.addEventListener('error', () => {
      isAudioPlaying.value = false
      audioError.value = 'Ses dosyası yüklenemedi.'
    })

    audioElement.addEventListener('ended', () => {
      isAudioPlaying.value = false
    })

    audioElement.src = currentStory.value.audio
    audioElement.load()
    audioElement.play().catch(() => {
      audioError.value = 'Ses çalınamadı. Tarayıcı izin vermemiş olabilir.'
    })
    isAudioPlaying.value = true
  }

  /** Sesi durdur (pause) */
  function pauseAudio() {
    if (audioElement) {
      audioElement.pause()
    }
    isAudioPlaying.value = false
  }

  /** Sesi başa sar ve durdur */
  function resetAudio() {
    if (audioElement) {
      audioElement.pause()
      audioElement.currentTime = 0
    }
    isAudioPlaying.value = false
  }

  /** Sesi tamamen temizle */
  function destroyAudio() {
    if (audioElement) {
      audioElement.pause()
      audioElement.removeAttribute('src')
      audioElement.load()
      audioElement = null
    }
    isAudioPlaying.value = false
  }

  /** Yeni oyun başlat — ses otomatik çalmaz */
  function startGame() {
    destroyAudio()
    const story = pickRandomStory()
    currentStory.value = story
    lastStoryId.value = story.id
    userAnswer.value = ''
    isCorrect.value = false
    isClose.value = false
    audioError.value = null
    phase.value = 'playing'
  }

  /** Cevabı kontrol et */
  function submitAnswer() {
    if (!currentStory.value || !userAnswer.value.trim()) return

    destroyAudio()

    const result = checkAnswer(userAnswer.value, currentStory.value.idiom)
    isCorrect.value = result.isCorrect
    isClose.value = result.isClose

    phase.value = 'result'
  }

  /** Ana menüye dön */
  function goHome() {
    destroyAudio()
    phase.value = 'idle'
    currentStory.value = null
    userAnswer.value = ''
    isCorrect.value = false
    isClose.value = false
    audioError.value = null
  }

  return {
    // State
    phase: readonly(phase),
    currentStory: readonly(currentStory),
    userAnswer,
    isCorrect: readonly(isCorrect),
    isClose: readonly(isClose),
    isAudioPlaying: readonly(isAudioPlaying),
    audioError: readonly(audioError),

    // Actions
    startGame,
    playAudio,
    pauseAudio,
    resetAudio,
    submitAnswer,
    goHome
  }
}
