import { colorTokens, themeTokens } from 'src/styles/theme.css'

import { style } from '@vanilla-extract/css'

export const underlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: colorTokens.background.underlay,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: themeTokens.space['3xl'],
  paddingLeft: themeTokens.space.xs,
  paddingRight: themeTokens.space.xs,
})

export const overlay = style({
  background: colorTokens.background.body,
  borderRadius: themeTokens.borderRadius.m,
  // minHeight: '33vh',
  display: 'flex',
  flexDirection: 'column',
})

export const cartHeader = style({
  padding: themeTokens.space.m,
  borderBottom: `1px solid ${colorTokens.text.muted.dark}`,
})

export const cartContents = style({
  padding: themeTokens.space.m,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
})
