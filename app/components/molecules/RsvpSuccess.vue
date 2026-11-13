<script setup lang="ts">
defineProps<{
  guestName: string
  attendanceLabel: string
  isAttending: boolean
  guestCount: number
  message: string
}>()
</script>

<template>
  <div
    class="flex flex-col gap-[20px] border border-line px-0 py-[40px] leading-[1.7]"
    role="status"
    aria-live="polite"
  >
    <span class="font-mono text-(length:--ag-text-xs) tracking-(--ag-tracking-wide)">
      RESPONSE RECEIVED
    </span>

    <h3 class="font-display text-[length:clamp(2.5rem,6vw,5rem)] leading-(--ag-leading-tight) font-medium tracking-(--ag-tracking-tight)">
      Thank you,<br>
      {{ guestName }}.
    </h3>

    <p class="leading-(--ag-leading-body) text-muted">
      {{ attendanceLabel }}
    </p>

    <p
      v-if="isAttending"
      class="leading-(--ag-leading-body) text-muted"
    >
      {{ guestCount }} {{ guestCount === 1 ? 'guest' : 'guests' }}
      confirmed.
    </p>

    <p
      v-if="message"
      class="leading-(--ag-leading-body) text-muted"
    >
      “{{ message }}”
    </p>

    <span class="font-mono text-(length:--ag-text-xs) tracking-(--ag-tracking-wide)">
      WE APPRECIATE YOUR REPLY.
    </span>
  </div>
</template>
