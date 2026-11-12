
<script setup lang="ts">
import { padNumber } from '~/utils/format'

const props = defineProps<{
  targetDate: string
}>()

const now = ref<number | null>(null)

let intervalId: ReturnType<typeof setInterval> | undefined

const targetTimestamp = computed(() => {
  const timestamp = new Date(props.targetDate).getTime()

  return Number.isFinite(timestamp) ? timestamp : null
})

const countdown = computed(() => {
  if (now.value === null || targetTimestamp.value === null) {
    return null
  }

  const difference = Math.max(0, targetTimestamp.value - now.value)
  const totalSeconds = Math.floor(difference / 1000)

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
})

const isExpired = computed(() => {
  return countdown.value !== null &&
    countdown.value.days === 0 &&
    countdown.value.hours === 0 &&
    countdown.value.minutes === 0 &&
    countdown.value.seconds === 0
})

const units = computed(() => {
  if (!countdown.value) return []

  return [
    { label: 'DAYS', value: countdown.value.days },
    { label: 'HOURS', value: countdown.value.hours },
    { label: 'MINUTES', value: countdown.value.minutes },
    { label: 'SECONDS', value: countdown.value.seconds },
  ]
})

onMounted(() => {
  now.value = Date.now()

  intervalId = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <section
    v-if="countdown"
    class="countdown-display section-shell"
    aria-label="Wedding countdown"
  >
    <div class="countdown-heading">
      <span class="countdown-line" />
      <p class="countdown-eyebrow">
        {{ isExpired ? 'THE DAY HAS ARRIVED' : 'COUNTING DOWN TO OUR DAY' }}
      </p>
      <span class="countdown-line" />
    </div>

    <div v-if="!isExpired" class="countdown-grid">
      <AtomsCountdownUnit
        v-for="unit in units"
        :key="unit.label"
        :value="padNumber(unit.value)"
        :label="unit.label"
      />
    </div>

    <p v-else class="countdown-expired">
      Today, a new chapter begins.
    </p>
  </section>
</template>

<style scoped>
.countdown-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--ag-space-6);
  padding-bottom: var(--ag-space-7);
}

.countdown-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 48px;
}

.countdown-line {
  width: clamp(24px, 8vw, 100px);
  height: 1px;
  background: var(--ag-line);
}

.countdown-eyebrow {
  flex-shrink: 0;
  color: var(--ag-muted);
  font-family: var(--ag-font-mono);
  font-size: var(--ag-text-xs);
  letter-spacing: var(--ag-tracking-wide);
  text-align: center;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: min(100%, 900px);
}

.countdown-expired {
  color: var(--ag-ink);
  font-family: var(--ag-font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-style: italic;
  text-align: center;
}

@media (max-width: 700px) {
  .countdown-display {
    padding-top: var(--ag-space-5);
    padding-bottom: var(--ag-space-6);
  }

  .countdown-heading {
    gap: 12px;
    margin-bottom: 36px;
  }

  .countdown-eyebrow {
    font-size: 9px;
  }
}
</style>
