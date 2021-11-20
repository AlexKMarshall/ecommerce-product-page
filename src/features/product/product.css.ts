import { colorTokens, themeTokens } from 'src/styles/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

import { recipe } from '@vanilla-extract/recipes'
import { resolveScreenMQ } from 'src/styles/sprinkles.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [resolveScreenMQ.desktop]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: themeTokens.space['3xl'],
    },
  },
})

export const brand = style({
  color: colorTokens.text.accent,
  textTransform: 'uppercase',
  fontSize: themeTokens.fontSize.xs,
  fontWeight: themeTokens.fontWeight.bold,
  letterSpacing: themeTokens.letterSpacing.wide,
})

export const imageSlider = style({
  display: 'grid',
  gridTemplateAreas: `'stack'`,
  justifyContent: 'center',
  alignContent: 'center',
})

globalStyle(`${imageSlider} > * `, {
  gridArea: 'stack',
})

export const carouselImage = recipe({
  base: {
    transitionProperty: 'transform',
    transitionDuration: '500ms',
  },

  variants: {
    position: {
      current: {
        transform: 'translateX(0%)',
      },
      previous: {
        transform: 'translateX(-100%)',
      },
      next: {
        transform: 'translateX(100%)',
      },
    },
  },
})

export const priceWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: themeTokens.space.xs,

  '@media': {
    [resolveScreenMQ.desktop]: {
      flexDirection: 'column',
    },
  },
})

export const formButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeTokens.space.xs,

  '@media': {
    [resolveScreenMQ.desktop]: {
      flexDirection: 'row',
    },
  },
})

globalStyle(`${formButtonWrapper} > :first-child`, {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: '33%',
})
globalStyle(`${formButtonWrapper} > :last-child`, {
  flexShrink: 0,
  flexGrow: 1,
  flexBasis: '66%',
})
