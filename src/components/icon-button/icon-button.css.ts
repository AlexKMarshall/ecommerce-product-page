import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

const iconButtonBase = style({
  background: colorTokens.background.body,
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: themeTokens.space.none,
  minHeight: '44px',
  minWidth: '44px',
  borderRadius: themeTokens.borderRadius.circle,
  position: 'relative',

  outlineOffset: '4px',

  ':active': {
    filter: 'brightness(0.8)',
  },
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
      muted: {
        color: colorTokens.text.muted.dark,
      },
    },
  },
})

export const badge = style({
  fontSize: themeTokens.fontSize['2xs'],
  fontWeight: themeTokens.fontWeight.bold,
  backgroundColor: colorTokens.background.accent,
  color: colorTokens.text.primary.light,
  paddingLeft: '0.8em',
  paddingRight: '0.8em',
  borderRadius: themeTokens.borderRadius.pill,
  position: 'absolute',
  top: '0.5em',
  right: 0,
})
