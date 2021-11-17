import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: themeTokens.borderRadius.m,
  overflow: 'hidden',
  backgroundColor: colorTokens.background.button,
})

export const button = style({
  flexBasis: '33%',
  padding: themeTokens.space.m,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: colorTokens.text.accent,
  border: 'none',
  backgroundColor: 'transparent',
  outlineColor: 'transparent',
  outlineOffset: '-5px',
})

export const input = style({
  padding: themeTokens.space.m,
  background: 'transparent',
  minWidth: 0,
  textAlign: 'center',
  color: colorTokens.text.primary.dark,
  fontWeight: themeTokens.fontWeight.bold,
  border: 'none',
  outlineColor: 'transparent',
  outlineOffset: '-5px',
})
