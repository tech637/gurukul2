import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0051A5',
      light: '#4A90E2',
      dark: '#001F3F',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FEB900',
      light: '#FFEDB3',
      dark: '#E6A500',
      contrastText: '#000000'
    },
    background: {
      default: '#E6F3FF',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#000000',
      secondary: '#333333'
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A'
    }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '112px',
      fontWeight: 700,
      letterSpacing: '-5.6px',
      lineHeight: '112px',
      '@media (max-width:768px)': {
        fontSize: '64px',
        lineHeight: '64px',
        letterSpacing: '-3.2px'
      }
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '63px',
      fontWeight: 800,
      letterSpacing: '-2px',
      lineHeight: '80px',
      '@media (max-width:768px)': {
        fontSize: '48px',
        lineHeight: '56px'
      }
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '59px',
      fontWeight: 800,
      letterSpacing: '-3px',
      lineHeight: '60px',
      '@media (max-width:768px)': {
        fontSize: '40px',
        lineHeight: '48px'
      }
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '56px',
      '@media (max-width:768px)': {
        fontSize: '32px',
        lineHeight: '40px'
      }
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '47px',
      fontWeight: 800,
      letterSpacing: '-2.4px',
      lineHeight: '48px',
      '@media (max-width:768px)': {
        fontSize: '28px',
        lineHeight: '32px'
      }
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px'
    },
    body2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px'
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px'
        }
      }
    }
  }
});

export default theme;