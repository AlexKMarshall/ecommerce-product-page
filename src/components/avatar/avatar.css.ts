import { resolveScreenMQ } from 'src/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const avatar = style({
  width: themeTokens.space.xl,
  height: 'auto',
  borderRadius: themeTokens.borderRadius.circle,

  '@media': {
    [resolveScreenMQ.desktop]: {
      width: themeTokens.space['2xl'],
    },
  },
})
