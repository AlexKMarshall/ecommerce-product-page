import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

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

export const toneTokens = createGlobalTheme(':root', {
  white: 'hsl(0 0% 100%)',
  black: 'hsl(0 0% 0%)',
  orange: 'hsl(26 100% 55%)',
  darkGrayishBlue: 'hsl(214 9% 45%)',
  veryDarkBlue: 'hsl(220 13% 13%)',
  grayishBlue: 'hsl(220 14% 75%)',
  lightGrayishBlue: 'hsl(223 64% 98%)',
})

export const colorTokens = createGlobalTheme(':root', {
  background: {
    body: toneTokens.white,
    accent: toneTokens.orange,
    button: toneTokens.lightGrayishBlue,
  },
  text: {
    primary: {
      dark: toneTokens.veryDarkBlue,
      light: toneTokens.white,
    },
    secondary: {
      dark: toneTokens.darkGrayishBlue,
    },
    muted: {
      dark: toneTokens.grayishBlue,
    },
    accent: toneTokens.orange,
  },
})
