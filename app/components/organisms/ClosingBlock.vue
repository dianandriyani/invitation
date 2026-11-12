
<script setup lang="ts">
import { motion } from 'motion-v'

import type {
  ClosingBlock as ClosingBlockData,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: ClosingBlockData
}>()
</script>

<template>
  <section
    class="closing-block section-shell"
    :data-variant="props.block.variant"
  >
    <span class="closing-eyebrow">
      UNTIL THEN,
    </span>

    <motion.h2
      class="display-title closing-title"
      :initial="{ opacity: 0, y: 30 }"
      while-in-view="visible"
      :viewport="{ once: true }"
      :variants="{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
          },
        },
      }"
    >
      {{ block.message }}
    </motion.h2>

    <motion.p
      class="closing-signature"
      :initial="{ opacity: 0, y: 12 }"
      while-in-view="visible"
      :viewport="{ once: true }"
      :variants="{
        hidden: {
          opacity: 0,
          y: 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.25,
          },
        },
      }"
    >
      {{ block.signature }}
    </motion.p>

    <AtomsAsteriskMark class="closing-symbol" />
  </section>
</template>

<style scoped>
.closing-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: var(--ag-space-7);
  padding-bottom: var(--ag-space-7);
}

.closing-eyebrow {
  margin-bottom: clamp(28px, 4vw, 44px);
  color: var(--ag-muted);
  font-family: var(--ag-font-mono);
  font-size: var(--ag-text-xs);
  letter-spacing: var(--ag-tracking-wide);
}

.closing-title {
  max-width: 850px;
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.055em;
}

.closing-signature {
  margin-top: clamp(28px, 4vw, 44px);
  color: var(--ag-ink);
  font-family: var(--ag-font-display);
  font-size: clamp(1.25rem, 2.2vw, 1.8rem);
  font-style: italic;
  line-height: 1.5;
}

.closing-symbol {
  margin-top: clamp(48px, 7vw, 80px);
  color: var(--ag-accent);
  font-size: 1.5rem;
}

@media (max-width: 700px) {
  .closing-block {
    padding-top: var(--ag-space-6);
    padding-bottom: var(--ag-space-6);
  }

  .closing-title {
    font-size: clamp(2.7rem, 11vw, 4.5rem);
  }

  .closing-signature {
    margin-top: 28px;
    font-size: 1.25rem;
  }
}
</style>
