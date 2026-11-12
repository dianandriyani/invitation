
import type {
  InvitationThemeRegistry,
} from '../../shared/types/theme'

export const themeRegistry = {
  'avant-garde': {
    id: 'avant-garde',
    name: 'Avant-garde',
    description: 'A quiet, editorial canvas with expressive typography.',
    className: 'theme-avant-garde',

    variables: {
      '--theme-bg': 'var(--ag-bg)',
      '--theme-surface': 'var(--ag-surface)',
      '--theme-ink': 'var(--ag-ink)',
      '--theme-muted': 'var(--ag-muted)',
      '--theme-accent': 'var(--ag-accent)',
      '--theme-line': 'var(--ag-line)',
    },
  },
} satisfies InvitationThemeRegistry

export type RegisteredThemeId = keyof typeof themeRegistry
