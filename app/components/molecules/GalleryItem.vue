<script setup lang="ts">
import { motion } from 'motion-v'

import { padNumber } from '~/utils/format'

import type { GalleryImage } from '../../../shared/types/invitation'

defineProps<{
  item: GalleryImage
  index: number
}>()
</script>

<template>
  <motion.figure
    class="gallery-item"
    :initial="{ opacity: 0, y: 32 }"
    while-in-view="visible"
    :viewport="{ once: true, amount: 0.15 }"
    :variants="{
      hidden: {
        opacity: 0,
        y: 32,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: index * 0.12,
        },
      },
    }"
  >
    <div class="gallery-image">
      <img
        :src="item.src"
        :alt="item.alt"
        loading="lazy"
        decoding="async"
      >
    </div>

    <figcaption v-if="item.caption">
      <span>{{ padNumber(index + 1) }}</span>
      {{ item.caption }}
    </figcaption>
  </motion.figure>
</template>

<style scoped>
.gallery-item {
  min-width: 0;
  margin: 0;
}

.gallery-image {
  overflow: hidden;
  width: 100%;
  background: var(--ag-surface);
}

.gallery-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 900ms var(--ag-ease-standard);
}

.gallery-item:hover .gallery-image img {
  transform: scale(1.035);
}

.gallery-item figcaption {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 12px;
  color: var(--ag-muted);
  font-family: var(--ag-font-mono);
  font-size: var(--ag-text-xs);
  letter-spacing: 0.04em;
}

.gallery-item figcaption span {
  color: var(--ag-ink);
}

@media (prefers-reduced-motion: reduce) {
  .gallery-image img {
    transition: none;
  }
}
</style>
