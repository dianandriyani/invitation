<script setup lang="ts">
const route = useRoute()
const { getDefault } = useInvitation()

const invitation = getDefault()

if (!invitation) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Invitation not found',
  })
}

const recipient = computed(() => {
  const value = route.query.for

  if (typeof value !== 'string' || !value.trim()) {
    return null
  }

  return value
    .trim()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\p{L}/gu, (character) => character.toUpperCase())
})

const isOpening = ref(false)

const pageTitle = computed(
  () =>
    `${invitation.couple.partnerOne} & ${invitation.couple.partnerTwo} — ${invitation.title}`,
)

const pageDescription = computed(
  () => invitation.couple.shortIntro,
)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary_large_image',
})

async function openInvitation() {
  isOpening.value = true

  await nextTick()

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  })
}
</script>

<template>
  <main>
    <OrganismsInvitationOpening
      v-if="recipient && !isOpening"
      :couple="invitation.couple"
      :recipient="recipient"
      @open="openInvitation"
    />

    <TemplatesInvitationTemplate
      v-else
      :invitation="invitation"
    />
  </main>
</template>
