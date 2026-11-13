<script setup lang="ts">
defineProps<{
  id: string
  max: number
}>()

const count = defineModel<number>({ required: true })
</script>

<template>
  <div class="flex flex-col gap-[14px]">
    <AtomsFieldLabel :for="id">
      NUMBER OF GUESTS
    </AtomsFieldLabel>

    <div class="flex items-center gap-[24px]">
      <button
        type="button"
        class="h-[38px] w-[38px] cursor-pointer rounded-[50%] border border-line bg-transparent text-ink disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Decrease guest count"
        :disabled="count <= 1"
        @click="count = Math.max(1, count - 1)"
      >
        −
      </button>

      <output
        class="min-w-[24px] text-center font-mono"
        :for="id"
      >
        {{ count }}
      </output>

      <button
        type="button"
        class="h-[38px] w-[38px] cursor-pointer rounded-[50%] border border-line bg-transparent text-ink disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Increase guest count"
        :disabled="count >= max"
        @click="count = Math.min(max, count + 1)"
      >
        +
      </button>
    </div>

    <span class="font-mono text-(length:--ag-text-xs) tracking-(--ag-tracking-wide) text-muted">
      MAXIMUM {{ max }} GUESTS
    </span>
  </div>
</template>
