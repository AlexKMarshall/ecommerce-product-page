import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const underlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: colorTokens.background.underlay,
  display: 'flex',
})

export const overlay = style({
  flexBasis: '66%',
  background: colorTokens.background.body,
  padding: themeTokens.space.l,
})
