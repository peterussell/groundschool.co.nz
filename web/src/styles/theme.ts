import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 2,
  },
  palette: {
    background: {
      default: "#fafafa"
    },
    primary: {
      main: "#15354e",
      contrastText: "#fff",
      light: "#fff",
    },
    secondary: {
      main: "rgb(57 89 114)",
      contrastText: "#fff",
      light: "#ddd"
    },
    success: {
      main: "#53a653",
      dark: "#05b169"
    },
    warning: {
      main: "#ffaa00"
    },
    error: {
      main: "#c00",
      dark: "#df5f67"
    },
    text: {
      primary: "#333",
      secondary: "#fff"
    },
  },
  typography: {
    fontSize: 13,
    body1: {
      fontFamily: "Roboto, sans-serif",
      lineHeight: "1.6em"
    },
    h1: {
      fontSize: "1.4em",
      fontWeight: 400,
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h2: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h3: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h4: {
      fontFamily: "Roboto Condensed, sans-serif",
      letterSpacing: -0.5,
      marginBottom: 20
    },
    h5: {
      fontFamily: "Roboto Condensed, sans-serif",
    },
    h6: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    subtitle1: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    subtitle2: {
      fontFamily: "Roboto Condensed, sans-serif"
    }
  },
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 300
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          h1: { marginRight: '1.6em' },
          button: { marginTop: '4px' },
          a: {
            color: '#fff',
            textDecoration: 'none'
          },
          svg: { color: '#fff', fontSize: '1.4em' }
        }
      }
    },
    MuiMenu: {
      defaultProps: {
        elevation: 1
      }
    }
  }
})