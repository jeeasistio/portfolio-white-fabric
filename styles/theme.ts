import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: '"Raleway", "Source Sans Pro"',
    h1: {
      fontFamily: 'Raleway'
    },
    h2: {
      fontFamily: 'Raleway'
    },
    h3: {
      fontFamily: 'Raleway'
    },
    h4: {
      fontFamily: 'Raleway'
    },
    h5: {
      fontFamily: 'Raleway'
    },
    h6: {
      fontFamily: 'Raleway'
    },
    subtitle1: {
      fontFamily: 'Source Sans Pro'
    },
    subtitle2: {
      fontFamily: 'Source Sans Pro'
    },
    body1: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '300'
    },
    body2: {
      fontFamily: 'Source Sans Pro'
    },
    button: {
      fontFamily: 'Raleway'
    },
    caption: {
      fontFamily: 'Source Sans Pro'
    },
    overline: {
      fontFamily: 'Source Sans Pro'
    }
  }
})

export default responsiveFontSizes(theme)
