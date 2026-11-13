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
    role="group"
    aria-label="Will you be attending?"
  >
    <span>WILL YOU BE THERE?</span>

    <div class="flex flex-wrap gap-[10px] mobile:flex-col">
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
