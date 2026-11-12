<script setup lang="ts">
defineProps<{
  id: string
  max: number
}>()

const count = defineModel<number>({ required: true })
</script>

<template>
  <div class="rsvp-field">
    <label :for="id">
      NUMBER OF GUESTS
    </label>

    <div class="rsvp-guest-counter">
      <button
        type="button"
        aria-label="Decrease guest count"
        :disabled="count <= 1"
        @click="count = Math.max(1, count - 1)"
      >
        −
      </button>

      <output :for="id">
        {{ count }}
      </output>

      <button
        type="button"
        aria-label="Increase guest count"
        :disabled="count >= max"
        @click="count = Math.min(max, count + 1)"
      >
        +
      </button>
    </div>

    <span class="rsvp-field-note">
      MAXIMUM {{ max }} GUESTS
    </span>
  </div>
</template>
