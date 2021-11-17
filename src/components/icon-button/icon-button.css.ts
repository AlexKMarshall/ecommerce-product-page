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
  position: 'relative',

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
