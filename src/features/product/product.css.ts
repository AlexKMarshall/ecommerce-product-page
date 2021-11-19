import { colorTokens, themeTokens } from 'src/styles/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const brand = style({
  color: colorTokens.text.accent,
  textTransform: 'uppercase',
  fontSize: themeTokens.fontSize.xs,
  fontWeight: themeTokens.fontWeight.bold,
  letterSpacing: themeTokens.letterSpacing.wide,
})

export const imageSlider = style({
  display: 'grid',
  gridTemplateAreas: 'stack',
})

globalStyle(`${imageSlider} > * `, {
  gridArea: 'stack',
})
