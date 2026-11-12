<script setup lang="ts">
import type { CoupleProfile } from '../../../shared/types/invitation'

defineProps<{
  couple: CoupleProfile
  recipient: string
}>()

const emit = defineEmits<{
  open: []
}>()
</script>

<template>
  <Transition name="opening" appear>
    <section
      class="invitation-opening"
      aria-label="Invitation opening"
    >
      <div class="opening-content">
        <span class="opening-eyebrow">
          YOU ARE INVITED TO THE CELEBRATION OF
        </span>

        <h1 class="opening-title">
          {{ couple.partnerOne }}
          <span>&</span>
          {{ couple.partnerTwo }}
        </h1>

        <MoleculesOrnamentDivider class="opening-divider" />

        <p class="opening-recipient-label">
          THIS INVITATION IS FOR
        </p>

        <p class="opening-recipient">
          {{ recipient }}
        </p>

        <AtomsPillButton
          class="opening-button"
          @click="emit('open')"
        >
          <span>OPEN INVITATION</span>
          <span aria-hidden="true">↗</span>
        </AtomsPillButton>
      </div>

      <div class="opening-bottomline">
        <span>{{ couple.shortIntro }}</span>
        <span>MADE WITH LOVE</span>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.invitation-opening {
  position: relative;
  display: flex;
  min-height: 100svh;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 32px clamp(24px, 7.2vw, 116px);
  background: #f5f2eb;
  color: #242321;
}

.opening-bottomline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #858078;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
}

.opening-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  text-align: center;
}

.opening-eyebrow,
.opening-recipient-label {
  color: #858078;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
}

.opening-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 36px 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.065em;
}

.opening-title span {
  margin: 12px 0;
  color: #a88e70;
  font-size: 0.45em;
  font-style: italic;
}

.opening-divider {
  margin: 20px 0 36px;
}

.opening-recipient-label {
  margin-bottom: 12px;
}

.opening-recipient {
  color: #242321;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-style: italic;
}

.opening-button {
  margin-top: 48px;
}

.opening-enter-active,
.opening-leave-active {
  transition:
    opacity 350ms ease,
    transform 350ms ease;
}

.opening-enter-from,
.opening-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 700px) {
  .invitation-opening {
    min-height: 100svh;
    padding: 24px;
  }

  .opening-bottomline {
    align-items: flex-end;
    font-size: 8px;
    letter-spacing: 0.08em;
  }

  .opening-bottomline span:first-child {
    max-width: 65%;
  }

  .opening-content {
    padding: 48px 0;
  }

  .opening-title {
    margin: 32px 0;
    font-size: clamp(3.5rem, 15vw, 6rem);
  }

  .opening-recipient {
    font-size: 1.6rem;
  }

  .opening-button {
    margin-top: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .opening-enter-active,
  .opening-leave-active {
    transition: none;
  }
}
</style>
