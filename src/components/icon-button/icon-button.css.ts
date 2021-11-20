import { colorTokens, themeTokens } from 'src/styles/theme.css'
import { createVar, style } from '@vanilla-extract/css'

import { recipe } from '@vanilla-extract/recipes'

const color = createVar()
const hoverColor = createVar()

const iconButtonBase = style({
  background: colorTokens.background.body,
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: themeTokens.space.none,
  minHeight: '44px',
  minWidth: '44px',
  borderRadius: themeTokens.borderRadius.circle,
  position: 'relative',
  // outline: '1px solid transparent',
  // outlineOffset: '4px',
  color,

  selectors: {
    '&:hover, &:active': {
      color: hoverColor,
    },
    '&:focus-visible': {
      outlineColor: colorTokens.background.accent,
    },
  },
})

export const iconButton = recipe({
  base: iconButtonBase,

  variants: {
    color: {
      default: {
        vars: {
          [color]: colorTokens.text.secondary.dark,
          [hoverColor]: colorTokens.text.primary.dark,
        },
      },
      muted: {
        vars: {
          [color]: colorTokens.text.muted.dark,
          [hoverColor]: colorTokens.text.secondary.dark,
        },
      },
    },
    hoverOutline: {
      true: {
        ':hover': {
          outlineStyle: 'auto',
          outlineWidth: '2px',
          outlineColor: colorTokens.background.accent,
        },
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const badge = style({
  fontSize: themeTokens.fontSize['2xs'],
  fontWeight: themeTokens.fontWeight.bold,
  backgroundColor: colorTokens.background.accent,
  color: colorTokens.text.primary.light,
  paddingLeft: '0.8em',
  paddingRight: '0.8em',
  borderRadius: themeTokens.borderRadius.pill,
  position: 'absolute',
  top: '0.5em',
  right: 0,
})
