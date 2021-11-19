import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const cluster = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
  },

  defaultVariants: {
    wrap: true,
  },
})
