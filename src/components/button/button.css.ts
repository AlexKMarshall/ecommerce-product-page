import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { recipe } from '@vanilla-extract/recipes'
import { resolveScreenMQ } from 'src/styles/sprinkles.css'

export const button = recipe({
  base: {
    padding: themeTokens.space.m,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: themeTokens.space.xs,
    border: 'none',
    borderRadius: themeTokens.borderRadius.m,
    fontWeight: themeTokens.fontWeight.bold,
    fontSize: themeTokens.fontSize.m,

    ':active': {
      filter: 'brightness(0.8)',
    },
  },

  variants: {
    variant: {
      accent: {
        backgroundColor: colorTokens.background.accent,
        color: colorTokens.text.primary.light,
      },
    },
    shadow: {
      true: {
        boxShadow: `0 20px 50px -20px ${colorTokens.background.accent}`,

        '@media': {
          [resolveScreenMQ.desktop]: {
            boxShadow: 'none',
          },
        },
      },
      false: {},
    },
  },

  defaultVariants: {
    variant: 'accent',
    shadow: false,
  },
})
