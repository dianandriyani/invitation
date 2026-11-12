<script setup lang="ts">
defineProps<{
  value: 'yes' | 'no' | ''
}>()

const emit = defineEmits<{
  select: [value: 'yes' | 'no']
}>()
</script>

<template>
  <div
    class="rsvp-attendance"
    role="group"
    aria-label="Will you be attending?"
  >
    <span>WILL YOU BE THERE?</span>

    <div class="rsvp-options">
      <AtomsOptionButton
        :selected="value === 'yes'"
        @click="emit('select', 'yes')"
      >
        JOYFULLY ACCEPTS
      </AtomsOptionButton>

      <AtomsOptionButton
        :selected="value === 'no'"
        @click="emit('select', 'no')"
      >
        REGRETFULLY DECLINES
      </AtomsOptionButton>
    </div>
  </div>
</template>
