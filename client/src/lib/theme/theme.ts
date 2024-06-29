import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C3FF93"
    },
    secondary: {
      main: "#666f73"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          padding: '5px 30px',
          fontWeight: 'bold',
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg"
      }
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  }
})


export default theme