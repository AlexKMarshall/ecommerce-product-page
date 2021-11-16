import { createGlobalTheme } from '@vanilla-extract/css'

export const themeTokens = createGlobalTheme(':root', {
  space: {
    xs: '0.75rem',
    s: '1rem',
    m: '1.25rem',
    l: '1.5rem',
    xl: '2rem',
    '2xl': '4rem',
    none: '0px',
  },
  fontSize: {
    xs: '0.75rem',
    s: '1rem',
    m: '1.25rem',
    l: '1.5rem',
    xl: '1.75rem',
    '2xl': '2rem',
  },
  fontWeight: {
    regular: '400',
    bold: '700',
  },
  letterSpacing: {
    wide: '0.15em',
  },
  borderRadius: {
    m: '10px',
    circle: '50%',
  },
})
