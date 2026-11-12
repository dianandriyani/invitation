<script setup lang="ts">
import type {
  EventBlock as EventBlockData,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: EventBlockData
}>()
</script>

<template>
  <section
    class="event-block section-shell section-grid"
    :class="`event-block--${props.block.variant}`"
    :data-variant="props.block.variant"
  >
    <MoleculesSectionMeta
      :label="block.eyebrow"
      detail="THE DAY"
    />

    <div class="event-content">
      <h2 class="display-title section-title">
        {{ block.title }}
      </h2>

      <div class="event-list">
        <MoleculesEventItem
          v-for="(event, index) in block.events"
          :key="event.id"
          :event="event"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
