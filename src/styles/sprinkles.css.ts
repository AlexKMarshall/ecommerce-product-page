import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { themeTokens } from './theme.css'

const properties = defineProperties({
  properties: {
    padding: themeTokens.space,
    paddingBottom: themeTokens.space,
    gap: themeTokens.space,
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    alignItems: ['stretch', 'center', 'baseline', 'flex-start'],
    fontSize: themeTokens.fontSize,
    fontWeight: themeTokens.fontWeight,
    display: ['block', 'inline'],
  },
})

export const sprinkles = createSprinkles(properties)
