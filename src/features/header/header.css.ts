import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { resolveScreenMQ } from 'src/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const header = style({
  padding: themeTokens.space.l,

  '@media': {
    [resolveScreenMQ.desktop]: {
      padding: themeTokens.space.none,
      paddingTop: themeTokens.space.xl,
      paddingBottom: themeTokens.space.xl,
      borderBottom: themeTokens.divider.narrow,
    },
  },
})

export const navAnchor = style({
  '@media': {
    [resolveScreenMQ.desktop]: {
      position: 'relative',
      outlineColor: 'transparent',

      ':after': {
        content: '',
        position: 'absolute',
        height: '4px',
        width: '100%',
        left: 0,
        bottom: '-45px',
        backgroundColor: colorTokens.background.accent,
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        transition: 'transform 200ms',
      },

      selectors: {
        '&:hover, &:focus-visible': {
          color: colorTokens.text.primary.dark,
        },
        '&:hover:after, &:focus-visible:after': {
          transform: 'scaleX(1)',
        },
      },
    },
  },
})
