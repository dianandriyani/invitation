<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div class="countdown-item">
    <span class="countdown-value">{{ value }}</span>
    <span class="countdown-label">{{ label }}</span>
  </div>
</template>

<style scoped>
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-right: var(--ag-border-subtle);
}

.countdown-item:last-child {
  border-right: none;
}

.countdown-value {
  color: var(--ag-ink);
  font-family: var(--ag-font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: var(--ag-tracking-tight);
  font-variant-numeric: tabular-nums;
}

.countdown-label {
  color: var(--ag-muted);
  font-family: var(--ag-font-mono);
  font-size: var(--ag-text-xs);
  letter-spacing: var(--ag-tracking-wide);
}

@media (max-width: 700px) {
  .countdown-item {
    gap: 10px;
    padding: 8px 4px;
  }

  .countdown-value {
    font-size: clamp(2.5rem, 11vw, 4rem);
  }

  .countdown-label {
    font-size: 9px;
    letter-spacing: 0.08em;
  }
}
</style>
