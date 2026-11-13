
<script setup lang="ts">

import type { Invitation } from '../../../shared/types/invitation'

const props = defineProps<{
  invitation: Invitation
}>()

const visibleBlocks = computed(() => {
  return props.invitation.blocks.filter((block) => {
    if (block.type === 'rsvp') {
      return props.invitation.settings.allowRsvp
    }

    return true
  })
})

const musicUrl = computed(() => {
  const { showMusicToggle, musicUrl } = props.invitation.settings

  return showMusicToggle && musicUrl ? musicUrl : null
})

provide(
  'invitation',
  computed(() => props.invitation),
)
</script>

<template>
  <TemplatesThemeProvider :theme="invitation.theme">
    <main
      class="mx-auto max-w-(--ag-container)"
      :data-invitation-id="invitation.id"
      :data-invitation-slug="invitation.slug"
    >
      <template
        v-for="block in visibleBlocks"
        :key="block.id"
      >
        <TemplatesBlockRenderer :block="block" />

        <OrganismsCountdownDisplay
          v-if="
            block.type === 'cover' &&
            invitation.settings.showCountdown
          "
          :target-date="invitation.weddingDate"
        />
      </template>

      <MoleculesMusicToggle
        v-if="musicUrl"
        :src="musicUrl"
      />

      <MoleculesSiteFooter :title="invitation.title" />
    </main>
  </TemplatesThemeProvider>
</template>
