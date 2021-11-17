import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const pill = style({
  display: 'inline-block',
  backgroundColor: colorTokens.background.mutedAccent,
  color: colorTokens.text.accent,
  fontWeight: themeTokens.fontWeight.bold,
  paddingLeft: themeTokens.space['2xs'],
  paddingRight: themeTokens.space['2xs'],
  borderRadius: themeTokens.borderRadius.s,
})
