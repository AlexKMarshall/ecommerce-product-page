import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

import { themeTokens } from 'src/styles/theme.css'

export const wrapper = styleVariants(themeTokens.space, (space) => ({
  width: space,
}))

globalStyle(`${wrapper} > svg`, {
  width: '100%',
})
