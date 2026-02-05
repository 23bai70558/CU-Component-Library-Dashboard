'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFB6D9',
      light: '#FFD4E5',
      dark: '#FF99C8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFC0D0',
      light: '#FFD9E3',
      dark: '#FFB3C1',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF5F8',
      paper: '#FFFFFF',
    },
    success: {
      main: '#FFB6D9',
    },
    error: {
      main: '#FF99C8',
    },
    warning: {
      main: '#FFD4E5',
    },
    info: {
      main: '#FFC0D0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        },
      },
    },
  },
});

export default theme;
