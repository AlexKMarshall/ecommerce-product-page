import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: themeTokens.borderRadius.m,
  overflow: 'hidden',
  backgroundColor: 'gray',
})

export const button = style({
  padding: themeTokens.space.m,
  border: 'none',
  backgroundColor: 'transparent',
  flexBasis: '33%',
  outlineColor: 'transparent',
  outlineOffset: '-5px',
})

export const input = style({
  padding: themeTokens.space.m,
  border: 'none',
  background: 'transparent',
  minWidth: 0,
  textAlign: 'center',
  outlineColor: 'transparent',
  outlineOffset: '-5px',
})
