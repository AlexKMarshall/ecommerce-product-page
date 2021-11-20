import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const center = style({
  maxWidth: '1600px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media': {
    'screen and (min-width: 1024px)': {
      paddingLeft: themeTokens.space['2xl'],
      paddingRight: themeTokens.space['2xl'],
    },
  },
})
