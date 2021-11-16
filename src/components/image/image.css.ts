import { globalStyle, style } from '@vanilla-extract/css'

export const imageWrapper = style({
  display: 'block',
})

globalStyle(`${imageWrapper} > *`, {
  display: 'block !important',
})
