
import type { CSSProperties } from 'vue'
import type { InvitationThemeId } from './invitation'

/**
 * CSS variables provided by a theme.
 *
 * Example:
 * {
 *   '--theme-bg': 'var(--ag-bg)',
 *   '--theme-ink': 'var(--ag-ink)',
 * }
 */
export type ThemeVariables = CSSProperties

/**
 * Metadata and configuration for a single invitation theme.
 */
export interface InvitationThemeDefinition {
  id: InvitationThemeId
  name: string
  description: string
  className: string
  variables: ThemeVariables
}

/**
 * Collection of registered invitation themes.
 *
 * The key represents the theme ID.
 */
export type InvitationThemeRegistry = Record<
  string,
  InvitationThemeDefinition
>
