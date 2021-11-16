import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const button = style({
  padding: themeTokens.space.m,
  border: 'none',
  borderRadius: themeTokens.borderRadius.m,
  fontWeight: themeTokens.fontWeight.bold,
})
