
<script setup lang="ts">
import { themeRegistry } from '../../registries/theme-registry'
import type { InvitationThemeId } from '../../../shared/types/invitation'

const props = defineProps<{
  theme: InvitationThemeId
}>()

const fallbackTheme = themeRegistry['avant-garde']

const definition = computed(() => {
  return themeRegistry[props.theme] ?? fallbackTheme
})
</script>

<template>
  <div
    class="min-h-screen overflow-clip bg-canvas text-ink"
    :class="definition.className"
    :style="definition.variables"
  >
    <slot />
  </div>
</template>
