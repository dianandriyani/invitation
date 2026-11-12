<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a
    class="text-link"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>
