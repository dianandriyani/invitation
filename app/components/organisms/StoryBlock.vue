
<script setup lang="ts">
import { motion } from 'motion-v'

import type {
  StoryBlock as StoryBlockData,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: StoryBlockData
}>()
</script>

<template>
  <section
    class="story-block section-shell section-grid"
    :class="`story-block--${props.block.variant}`"
    :data-variant="props.block.variant"
  >
    <MoleculesSectionMeta
      :label="block.eyebrow"
      :detail="block.year"
    />

    <div class="story-content">
      <motion.h2
        class="display-title section-title"
        :initial="{ opacity: 0, y: 28 }"
        while-in-view="visible"
        :viewport="{ once: true, amount: 0.3 }"
        :variants="{
          hidden: {
            opacity: 0,
            y: 28,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          },
        }"
      >
        {{ block.title }}
      </motion.h2>

      <motion.p
        class="story-body"
        :initial="{ opacity: 0, y: 20 }"
        while-in-view="visible"
        :viewport="{ once: true, amount: 0.3 }"
        :variants="{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.15,
            },
          },
        }"
      >
        {{ block.body }}
      </motion.p>

      <AtomsAsteriskMark class="story-mark" />
    </div>
  </section>
</template>
