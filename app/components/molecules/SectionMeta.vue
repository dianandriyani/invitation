<script setup lang="ts">
defineProps<{
  label: string
  detail: string
}>()
</script>

<template>
  <div class="section-meta">
    <span>{{ label }}</span>
    <span>{{ detail }}</span>
  </div>
</template>
