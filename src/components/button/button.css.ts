import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { recipe } from '@vanilla-extract/recipes'

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
  },

  variants: {
    variant: {
      accent: {
        backgroundColor: colorTokens.background.accent,
        color: colorTokens.text.primary.light,
        boxShadow: `0 20px 50px -20px ${colorTokens.background.accent}`,
      },
    },
  },

  defaultVariants: {
    variant: 'accent',
  },
})
