import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { themeTokens } from './theme.css'

export const screenSizes = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
}

export const resolveScreenMQ = {
  mobile: `screen and (min-width: ${screenSizes.mobile}px)`,
  tablet: `screen and (min-width: ${screenSizes.tablet}px)`,
  desktop: `screen and (min-width: ${screenSizes.desktop}px)`,
}

const properties = defineProperties({
  conditions: {
    all: {},
    mobile: {
      '@media': resolveScreenMQ.mobile,
    },
    tablet: {
      '@media': resolveScreenMQ.tablet,
    },
    desktop: {
      '@media': resolveScreenMQ.desktop,
    },
  },
  defaultCondition: 'all',
  properties: {
    padding: themeTokens.space,
    paddingBottom: themeTokens.space,
    gap: themeTokens.space,
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    alignItems: ['stretch', 'center', 'baseline', 'flex-start'],
    alignSelf: ['center'],
    flexWrap: ['wrap', 'nowrap'],
    fontSize: themeTokens.fontSize,
    fontWeight: themeTokens.fontWeight,
    display: ['block', 'inline', 'grid', 'none'],
  },
})

export const sprinkles = createSprinkles(properties)
