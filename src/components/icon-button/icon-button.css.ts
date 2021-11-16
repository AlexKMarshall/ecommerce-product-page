import { style } from '@vanilla-extract/css'
import { themeTokens } from 'src/styles/theme.css'

export const iconButton = style({
  background: 'none',
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: themeTokens.space.none,
  minHeight: '44px',
  minWidth: '44px',
  borderRadius: themeTokens.borderRadius.circle,
  cursor: 'pointer',

  outlineOffset: '4px',
})
