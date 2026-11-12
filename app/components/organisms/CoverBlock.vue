
<script setup lang="ts">
import { motion } from 'motion-v'

import type {
  CoverBlock as CoverBlockData,
  Invitation,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: CoverBlockData
}>()

const invitation = inject<ComputedRef<Invitation> | null>(
  'invitation',
  null,
)

const coupleNames = computed(() => {
  const couple = invitation?.value.couple

  if (!couple) {
    return 'AN INVITATION TO CELEBRATE'
  }

  return `${couple.partnerOne} & ${couple.partnerTwo}`
})

const weddingDate = computed(() => {
  const date = invitation?.value.weddingDate

  if (!date) return ''

  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return ''
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  })
    .format(parsedDate)
    .replaceAll('/', ' · ')
})

const location = computed(() => {
  const eventBlock = invitation?.value.blocks.find(
    (block) => block.type === 'event',
  )

  const address = eventBlock?.events[0]?.address
  const city = address?.split(',').pop()?.trim()

  return city
    ? `${city} · INDONESIA`.toUpperCase()
    : 'JAKARTA · INDONESIA'
})
</script>

<template>
  <section
    class="cover-block section-shell"
    :class="`cover-block--${props.block.variant}`"
    :data-variant="props.block.variant"
  >
    <div class="cover-topline">
      <span>{{ invitation?.title.toUpperCase() ?? 'EF—001' }}</span>
      <span>{{ block.eyebrow }}</span>
      <span>SCROLL TO EXPLORE ↓</span>
    </div>

    <div class="cover-content">
      <motion.div
        class="cover-index"
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.1 }"
      >
        {{ coupleNames }}
      </motion.div>

      <motion.h1
        class="display-title cover-title"
        :initial="{ opacity: 0, y: 36 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }"
      >
        {{ block.headline }}
      </motion.h1>

      <motion.p
        class="cover-description"
        :initial="{ opacity: 0, y: 18 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.55 }"
      >
        {{ block.supportingText }}
      </motion.p>
    </div>

    <div class="cover-bottomline">
      <span>{{ weddingDate || 'AN OPENING CHAPTER' }}</span>
      <AtomsAsteriskMark class="cover-asterisk" />
      <span>{{ location }}</span>
    </div>
  </section>
</template>

<style scoped>
.cover-index {
  max-width: 100%;
  margin-bottom: clamp(28px, 4vw, 52px);
  color: var(--ag-accent);
  font-family: var(--ag-font-mono);
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cover-title {
  max-width: 1100px;
  font-size: clamp(4rem, 10.5vw, 9.5rem);
  line-height: 0.92;
}

.cover-description {
  max-width: 420px;
  margin-top: clamp(28px, 4vw, 48px);
  font-size: clamp(0.9rem, 1.2vw, 1.05rem);
  line-height: 1.85;
  color: var(--ag-muted);
}

@media (max-width: 700px) {
  .cover-index {
    margin-bottom: 28px;
    font-size: clamp(0.85rem, 4vw, 1.1rem);
    letter-spacing: 0.08em;
  }

  .cover-title {
    font-size: clamp(3.5rem, 15vw, 6rem);
  }

  .cover-description {
    max-width: 320px;
    margin-top: 28px;
    font-size: 0.9rem;
  }
}
</style>
