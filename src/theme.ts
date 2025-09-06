import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001F3F', // Navy blue
      light: '#4A90E2',
      dark: '#000B1A',
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
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(28px, 8vw, 64px)',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      '@media (max-width:480px)': {
        fontSize: 'clamp(24px, 10vw, 40px)',
        letterSpacing: '-0.01em'
      }
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(20px, 6vw, 40px)',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
      '@media (max-width:480px)': {
        fontSize: 'clamp(18px, 8vw, 28px)'
      }
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(18px, 5vw, 28px)',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      '@media (max-width:480px)': {
        fontSize: 'clamp(16px, 6vw, 22px)'
      }
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(16px, 4vw, 22px)',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:480px)': {
        fontSize: 'clamp(14px, 5vw, 18px)'
      }
    },
    h5: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(14px, 3vw, 18px)',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:480px)': {
        fontSize: 'clamp(13px, 4vw, 16px)'
      }
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(12px, 2.5vw, 16px)',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:480px)': {
        fontSize: 'clamp(11px, 3vw, 14px)'
      }
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(14px, 3vw, 16px)',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (max-width:480px)': {
        fontSize: 'clamp(13px, 4vw, 15px)',
        lineHeight: 1.5
      }
    },
    body2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      fontWeight: 400,
      lineHeight: 1.5,
      '@media (max-width:480px)': {
        fontSize: 'clamp(11px, 3vw, 13px)'
      }
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 'clamp(10px, 2vw, 12px)',
      fontWeight: 700,
      letterSpacing: '0.5px',
      textTransform: 'uppercase'
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          minHeight: '48px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (max-width:480px)': {
            padding: '14px 20px',
            fontSize: '14px',
            minHeight: '44px',
            borderRadius: '12px'
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width:600px)': {
            paddingLeft: '24px',
            paddingRight: '24px'
          },
          '@media (min-width:900px)': {
            paddingLeft: '32px',
            paddingRight: '32px'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)'
          }
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

export default theme;