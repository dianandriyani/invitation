<script setup lang="ts">
import { motion } from 'motion-v'

import type {
  RsvpBlock as RsvpBlockData,
} from '../../../shared/types/invitation'

const props = defineProps<{
  block: RsvpBlockData
}>()

const guestNameId = useId()
const guestCountId = useId()
const messageId = useId()

const guestName = ref('')
const attendance = ref<'yes' | 'no' | ''>('')
const guestCount = ref(1)
const message = ref('')
const submitted = ref(false)

const maxGuests = computed(() => {
  return Math.max(1, props.block.maxGuests ?? 2)
})

const canSubmit = computed(() => {
  return Boolean(guestName.value.trim() && attendance.value)
})

const formattedAttendance = computed(() => {
  return attendance.value === 'yes'
    ? 'JOYFULLY ACCEPTS'
    : 'REGRETFULLY DECLINES'
})

function selectAttendance(value: 'yes' | 'no') {
  attendance.value = value

  if (value === 'no') {
    guestCount.value = 0
  } else {
    guestCount.value = 1
  }
}

function submitRsvp() {
  if (!canSubmit.value) return

  submitted.value = true
}
</script>

<template>
  <section class="rsvp-block section-shell section-grid">
    <MoleculesSectionMeta
      :label="props.block.eyebrow"
      detail="YOUR REPLY"
    />

    <div class="rsvp-content">
      <h2 class="display-title section-title">
        {{ props.block.title }}
      </h2>

      <p class="rsvp-description">
        {{ props.block.description }}
      </p>

      <motion.form
        class="rsvp-form"
        :initial="{ opacity: 0, y: 20 }"
        while-in-view="visible"
        :viewport="{ once: true }"
        :variants="{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
            },
          },
        }"
        @submit.prevent="submitRsvp"
      >
        <template v-if="!submitted">
          <label :for="guestNameId">
            YOUR NAME
          </label>

          <input
            :id="guestNameId"
            v-model="guestName"
            autocomplete="name"
            maxlength="100"
            placeholder="Full name"
            required
          >

          <MoleculesRsvpAttendancePicker
            :value="attendance"
            @select="selectAttendance"
          />

          <MoleculesRsvpGuestCounter
            v-if="attendance === 'yes'"
            :id="guestCountId"
            v-model="guestCount"
            :max="maxGuests"
          />

          <MoleculesRsvpMessageField
            :id="messageId"
            v-model="message"
          />

          <button
            class="submit-button"
            type="submit"
            :disabled="!canSubmit"
          >
            SEND RESPONSE <span>↗</span>
          </button>
        </template>

        <MoleculesRsvpSuccess
          v-else
          :guest-name="guestName.trim()"
          :attendance-label="formattedAttendance"
          :is-attending="attendance === 'yes'"
          :guest-count="guestCount"
          :message="message.trim()"
        />
      </motion.form>

      <p class="demo-note">
        DEMO ONLY · RESPONSES ARE NOT SAVED TO A SERVER
      </p>
    </div>
  </section>
</template>
