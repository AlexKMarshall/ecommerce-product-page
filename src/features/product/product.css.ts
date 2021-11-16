import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const brand = style({
  textTransform: 'uppercase',
  fontSize: themeTokens.fontSize.xs,
  fontWeight: themeTokens.fontWeight.bold,
  letterSpacing: themeTokens.letterSpacing.wide,
})
