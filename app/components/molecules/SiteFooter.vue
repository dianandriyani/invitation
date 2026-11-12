<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <footer class="site-footer">
    <span>{{ title }}</span>
    <span>AN INVITATION, REIMAGINED.</span>
  </footer>
</template>
