import { extendTheme } from '@mui/joy/styles'

const myTheme = extendTheme({
  fontFamily: {
    display: '"Space Grotesk", var(--joy-fontFamily-fallback)',
    body: '"Inter", var(--joy-fontFamily-fallback)',
    fallback:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  typography: {
    body1: {
      fontSize: 'var(--joy-fontSize-xl)',
      color: 'var(--joy-palette-neutral-600)'
    }
  }
})

export default myTheme
