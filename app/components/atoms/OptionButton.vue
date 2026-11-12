<script setup lang="ts">
defineProps<{
  selected: boolean
}>()
</script>

<template>
  <button
    type="button"
    :class="{ selected }"
    :aria-pressed="selected"
  >
    <slot />
  </button>
</template>
