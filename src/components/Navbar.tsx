import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Container,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  borderRadius: '16px',
  margin: theme.spacing(2),
  width: 'calc(100% - 32px)',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1),
    width: 'calc(100% - 16px)',
    borderRadius: '12px'
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
  }
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 700,
  fontSize: '24px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  cursor: 'pointer'
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '16px',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.primary.main
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '16px',
  padding: theme.spacing(1.5, 3),
  borderRadius: '9999px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper
  }
}));

const DrawerHeader = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.grey[200]}`
}));

const MobileNavButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '100%',
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '16px',
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.primary.main
  }
}));

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Success Stories', href: '#success' },
    { label: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Container maxWidth="lg" sx={{ px: 3 }}>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1, minHeight: '64px' }}>
            <Logo variant="h6">
              Startup Gurukul
            </Logo>

            {!isMobile ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <Stack direction="row" spacing={0.5}>
                  {navItems.map((item) => (
                    <NavButton
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Stack>
                <CTAButton 
                  sx={{ ml: 2 }}
                  onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
                >
                  Book a Call
                </CTAButton>
              </Stack>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        <DrawerHeader>
          <Logo variant="h6">
            Startup Gurukul
          </Logo>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <MobileNavButton
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </MobileNavButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <CTAButton 
              fullWidth
              onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
            >
              Book a Call
            </CTAButton>
          </ListItem>
        </List>
      </MobileDrawer>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;