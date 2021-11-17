import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

const iconButtonBase = style({
  background: 'none',
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: themeTokens.space.none,
  minHeight: '44px',
  minWidth: '44px',
  borderRadius: themeTokens.borderRadius.circle,
  cursor: 'pointer',

  outlineOffset: '4px',
})

export const iconButton = recipe({
  base: iconButtonBase,

  variants: {
    color: {
      primary: {
        color: colorTokens.text.primary.dark,
      },
      secondary: {
        color: colorTokens.text.secondary.dark,
      },
    },
  },
})
