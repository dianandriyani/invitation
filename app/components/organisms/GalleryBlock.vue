<script setup lang="ts">
import { padNumber } from '~/utils/format'

import type {
  GalleryBlock as GalleryBlockData,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: GalleryBlockData
}>()
</script>

<template>
  <section class="gallery-block section-shell">
    <div class="gallery-heading">
      <MoleculesSectionMeta
        :label="block.eyebrow"
        :detail="`${padNumber(1)} — ${padNumber(block.images.length)}`"
      />

      <h2 class="display-title section-title">
        {{ block.title }}
      </h2>
    </div>

    <div
      class="gallery-layout"
      :class="`gallery-layout--${props.block.variant}`"
      :data-variant="props.block.variant"
    >
      <MoleculesGalleryItem
        v-for="(item, index) in block.images"
        :key="item.id"
        :item="item"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped>
.gallery-layout {
  display: grid;
  gap: 24px;
  width: 100%;
}

/* GRID */

.gallery-layout--grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
}

.gallery-layout--grid :deep(.gallery-image) {
  aspect-ratio: 4 / 5;
}

/* MASONRY */

.gallery-layout--masonry {
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: start;
  column-gap: 20px;
  row-gap: 48px;
}

.gallery-layout--masonry .gallery-item:nth-child(1) {
  grid-column: span 7;
}

.gallery-layout--masonry .gallery-item:nth-child(1) :deep(.gallery-image) {
  aspect-ratio: 5 / 4;
}

.gallery-layout--masonry .gallery-item:nth-child(2) {
  grid-column: span 5;
  margin-top: 100px;
}

.gallery-layout--masonry .gallery-item:nth-child(2) :deep(.gallery-image) {
  aspect-ratio: 3 / 4;
}

.gallery-layout--masonry .gallery-item:nth-child(3) {
  grid-column: 3 / span 6;
  margin-top: -20px;
}

.gallery-layout--masonry .gallery-item:nth-child(3) :deep(.gallery-image) {
  aspect-ratio: 4 / 5;
}

.gallery-layout--masonry .gallery-item:nth-child(n + 4) {
  grid-column: span 4;
}

.gallery-layout--masonry .gallery-item:nth-child(n + 4) :deep(.gallery-image) {
  aspect-ratio: 4 / 5;
}

/* RESPONSIVE */

@media (max-width: 700px) {
  .gallery-layout {
    gap: 28px;
  }

  .gallery-layout--grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-layout--grid .gallery-item:last-child:nth-child(odd) {
    grid-column: span 2;
  }

  .gallery-layout--masonry {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 12px;
    row-gap: 32px;
  }

  .gallery-layout--masonry .gallery-item:nth-child(1) {
    grid-column: span 2;
  }

  .gallery-layout--masonry .gallery-item:nth-child(2) {
    grid-column: 2;
    margin-top: 0;
  }

  .gallery-layout--masonry .gallery-item:nth-child(3) {
    grid-column: 1;
    margin-top: 40px;
  }

  .gallery-layout--masonry .gallery-item:nth-child(n + 4) {
    grid-column: span 1;
  }
}
</style>
