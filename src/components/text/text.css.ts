import { colorTokens } from 'src/styles/theme.css'
import { recipe } from '@vanilla-extract/recipes'

export const color = recipe({
  variants: {
    color: {
      primary: {
        color: colorTokens.text.primary.dark,
      },
      secondary: {
        color: colorTokens.text.secondary.dark,
      },
      muted: {
        color: colorTokens.text.muted.dark,
      },
    },
  },
})
