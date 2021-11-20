import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const header = style({
  padding: themeTokens.space.l,

  '@media': {
    'screen and (min-width: 1024px)': {
      padding: themeTokens.space.none,
      paddingTop: themeTokens.space.xl,
      paddingBottom: themeTokens.space.xl,
      borderBottom: themeTokens.divider.narrow,
    },
  },
})
