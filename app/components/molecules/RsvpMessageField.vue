<script setup lang="ts">
defineProps<{
  id: string
}>()

const message = defineModel<string>({ required: true })
</script>

<template>
  <div class="rsvp-field">
    <label :for="id">
      A LITTLE NOTE <span>(OPTIONAL)</span>
    </label>

    <textarea
      :id="id"
      v-model="message"
      maxlength="500"
      rows="3"
      placeholder="Leave a message for the couple..."
    />
  </div>
</template>
