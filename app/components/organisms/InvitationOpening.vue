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
  <Transition
    appear
    enter-active-class="transition-[opacity,transform] duration-[350ms] ease-[ease] motion-reduce:transition-none"
    leave-active-class="transition-[opacity,transform] duration-[350ms] ease-[ease] motion-reduce:transition-none"
    enter-from-class="opacity-0 [transform:translateY(-12px)]"
    leave-to-class="opacity-0 [transform:translateY(-12px)]"
  >
    <section
      class="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#f5f2eb] px-[clamp(24px,7.2vw,116px)] py-8 text-[#242321] mobile:px-6 mobile:py-7"
      aria-label="Invitation opening"
    >
      <!-- Main content -->
      <div
        class="flex w-full flex-1 flex-col items-center justify-center py-6 text-center mobile:py-4"
      >
        <span
          class="font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[#858078] mobile:text-[9px]"
        >
          YOU ARE INVITED TO THE CELEBRATION OF
        </span>

        <h3
          class="mx-0 my-7 flex flex-col items-center font-['Playfair_Display',Georgia,serif] text-[length:clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.055em] mobile:my-6 mobile:text-[length:clamp(2.5rem,11vw,4rem)]"
        >
          {{ couple.partnerOne }}

          <span class="my-1 text-[0.45em] text-[#a88e70] italic">
            &
          </span>

          {{ couple.partnerTwo }}
        </h3>

        <p
          class="font-['DM_Mono',monospace] text-[16px] tracking-[0.2em] text-[#a88e70] mobile:text-[9px]"
        >
          SAVE THE DATE · 19 JUNE 2027
        </p>

        <MoleculesOrnamentDivider class="mt-6 mb-8 mobile:mt-5 mobile:mb-7" />

        <div class="flex flex-col items-center">
          <p
            class="mb-2 font-['DM_Mono',monospace] text-[10px] tracking-[0.16em] text-[#858078]"
          >
            THIS INVITATION IS FOR
          </p>

          <p
            class="font-['Playfair_Display',Georgia,serif] text-[length:clamp(1.5rem,3vw,2.5rem)] text-[#242321] italic mobile:text-[1.5rem]"
          >
            {{ recipient }}
          </p>
        </div>

        <AtomsPillButton
          class="mt-9 mobile:mt-8"
          @click="emit('open')"
        >
          <span>OPEN INVITATION</span>
          <span aria-hidden="true">↗</span>
        </AtomsPillButton>
      </div>

      <!-- Footer -->
      <div
        class="flex w-full shrink-0 items-end justify-between gap-4 border-t border-[#ded8cc] pt-5 font-['DM_Mono',monospace] text-[9px] tracking-[0.12em] text-[#858078] mobile:pt-4 mobile:text-[8px] mobile:tracking-[0.08em]"
      >
        <span class="max-w-[65%] leading-relaxed">
          {{ couple.shortIntro }}
        </span>

        <span class="shrink-0 text-right">
          MADE WITH LOVE
        </span>
      </div>
    </section>
  </Transition>
</template>

