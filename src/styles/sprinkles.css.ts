import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { themeTokens } from './theme.css'

const properties = defineProperties({
  properties: {
    padding: themeTokens.space,
    gap: themeTokens.space,
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
  },
})

export const sprinkles = createSprinkles(properties)
