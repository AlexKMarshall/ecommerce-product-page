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
  gridTemplateAreas: `'stack'
                      'thumbnails'`,
  gridTemplateRows: '1fr auto',
  justifyContent: 'center',
  alignContent: 'center',

  '@media': {
    [resolveScreenMQ.desktop]: {
      gap: themeTokens.space.l,
    },
  },
})

globalStyle(`${imageSlider} > * `, {
  gridArea: 'stack',
})

export const carouselImageWrapper = style({
  display: 'grid',
  gridTemplateAreas: `'layer'`,

  '@media': {
    [resolveScreenMQ.desktop]: {
      borderRadius: themeTokens.borderRadius.l,
      overflow: 'hidden',
    },
  },
})

globalStyle(`${carouselImageWrapper} > * `, {
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

export const thumbnailWrapper = style({
  gridArea: 'thumbnails',
  display: 'none',
  justifyContent: 'center',
  gap: `min(${themeTokens.space.l}, 5%)`,

  '@media': {
    [resolveScreenMQ.desktop]: {
      display: 'flex',
    },
  },
})

export const thumbnailHiddenInput = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: '0%',
})

export const thumbnailLabel = style({
  display: 'block',
  position: 'relative',
  background: 'transparent',
  flexBasis: themeTokens.space['2xl'],
})

export const thumbnailImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: themeTokens.borderRadius.s,
  outlineColor: 'transparent',
  outlineStyle: 'auto',
  outlineOffset: '0px',
  transitionDuration: '200ms',
  transitionProperty: 'outline-color, outline-offset',

  selectors: {
    [`${thumbnailHiddenInput}:checked + &, ${thumbnailHiddenInput}:hover + &`]:
      {
        outlineOffset: '4px',
        outlineColor: colorTokens.background.accent,
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
