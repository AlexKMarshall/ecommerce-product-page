import { colorTokens } from './theme.css'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', {
  fontFamily: "'Kumbh Sans', sans-serif",
  backgroundColor: colorTokens.background.body,
  color: colorTokens.text.secondary.dark,
})
