<script setup lang="ts">
import { motion } from 'motion-v'

import { getMapsUrl, padNumber } from '../../utils/format'

import type { InvitationEvent } from '../../../shared/types/invitation'

defineProps<{
  event: InvitationEvent
  index: number
}>()
</script>

<template>
  <motion.article
    class="event-item"
    :initial="{ opacity: 0, x: 20 }"
    while-in-view="visible"
    :viewport="{ once: true, amount: 0.3 }"
    :variants="{
      hidden: {
        opacity: 0,
        x: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
        },
      },
    }"
  >
    <span class="event-number">
      {{ padNumber(index + 1) }}
    </span>

    <div class="event-details">
      <span class="event-label">
        {{ event.label }}
      </span>

      <h3>{{ event.venue }}</h3>

      <p>
        {{ event.date }} · {{ event.startTime }}
        <template v-if="event.endTime">
          —{{ event.endTime }}
        </template>
      </p>

      <p>{{ event.address }}</p>
    </div>

    <AtomsTextLink
      :href="getMapsUrl(event.address)"
      :aria-label="`Get directions to ${event.venue}`"
    >
      GET DIRECTIONS ↗
    </AtomsTextLink>
  </motion.article>
</template>
