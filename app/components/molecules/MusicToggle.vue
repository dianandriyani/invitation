
<script setup lang="ts">
const props = defineProps<{
  src: string
}>()

const audio = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const isLoading = ref(false)
const hasError = ref(false)

async function togglePlayback() {
  if (!audio.value || isLoading.value) return

  if (isPlaying.value) {
    audio.value.pause()
    return
  }

  try {
    isLoading.value = true
    hasError.value = false

    await audio.value.play()
  } catch {
    hasError.value = true
    isPlaying.value = false
  } finally {
    isLoading.value = false
  }
}

function handlePlay() {
  isPlaying.value = true
  hasError.value = false
}

function handlePause() {
  isPlaying.value = false
}

function handleError() {
  hasError.value = true
  isPlaying.value = false
  isLoading.value = false
}

onBeforeUnmount(() => {
  audio.value?.pause()
})
</script>

<template>
  <div class="music-toggle">
    <audio
      ref="audio"
      :src="props.src"
      loop
      preload="none"
      @play="handlePlay"
      @pause="handlePause"
      @error="handleError"
    />

    <button
      type="button"
      class="music-toggle__button"
      :aria-label="isPlaying ? 'Pause background music' : 'Play background music'"
      :aria-pressed="isPlaying"
      :disabled="isLoading"
      @click="togglePlayback"
    >
      <span
        class="music-toggle__icon"
        :class="{ 'is-playing': isPlaying }"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </span>

      <span class="music-toggle__label">
        {{ hasError ? 'UNAVAILABLE' : isLoading ? 'LOADING' : isPlaying ? 'PAUSE MUSIC' : 'PLAY MUSIC' }}
      </span>
    </button>
  </div>
</template>
