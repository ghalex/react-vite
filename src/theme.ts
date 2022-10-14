import { extendTheme } from '@mui/joy/styles'

declare module '@mui/joy/styles' {
  interface PaletteBackground {
    appBody: string
    componentBg: string
  }
}

const myTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          appBody: 'var(--joy-palette-neutral-50)',
          componentBg: 'var(--joy-palette-common-white)'
        }
      }
    },
    dark: {
      palette: {
        background: {
          appBody: 'var(--joy-palette-common-black)',
          componentBg: 'var(--joy-palette-neutral-900)'
        }
      }
    }
  },
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
