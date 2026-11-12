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
    class="rsvp-success"
    role="status"
    aria-live="polite"
  >
    <span class="rsvp-success__eyebrow">
      RESPONSE RECEIVED
    </span>

    <h3>
      Thank you,<br>
      {{ guestName }}.
    </h3>

    <p>
      {{ attendanceLabel }}
    </p>

    <p v-if="isAttending">
      {{ guestCount }} {{ guestCount === 1 ? 'guest' : 'guests' }}
      confirmed.
    </p>

    <p v-if="message">
      “{{ message }}”
    </p>

    <span class="rsvp-success__closing">
      WE APPRECIATE YOUR REPLY.
    </span>
  </div>
</template>
