import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './Logo';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<{ scrolled: boolean }>(({ scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
  backdropFilter: scrolled ? 'blur(20px)' : 'none',
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
  borderBottom: scrolled ? '1px solid rgba(0, 81, 165, 0.1)' : 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  minHeight: '64px',
  animation: `${fadeInDown} 0.6s ease-out`
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: 'clamp(14px, 2.5vw, 16px)',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minHeight: '40px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
    color: theme.palette.common.white,
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 81, 165, 0.3)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%'
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: 'clamp(14px, 2.5vw, 16px)',
  textTransform: 'none',
  padding: theme.spacing(1.5, 2.5),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 15px rgba(254, 185, 0, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minHeight: '40px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(254, 185, 0, 0.4)',
    background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, #B8860B 100%)`
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%'
  }
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '320px',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    animation: `${fadeInDown} 0.3s ease-out`
  }
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.common.white
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2)
}));

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Sprint', href: '#programs' },
    { label: 'Success Stories', href: '#success' },
    { label: 'FAQ', href: '#faq' }
  ];

  const drawer = (
    <Box>
      <DrawerHeader>
        <Logo onClick={() => setMobileOpen(false)} />
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ color: 'white' }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <DrawerContent>
        <List>
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  sx={{ 
                    py: 2, 
                    borderRadius: 2,
                    mb: 0.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                      color: 'white',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontSize: '16px', 
                      fontWeight: 600 
                    }} 
                  />
                </ListItemButton>
              </ListItem>
              {index < navItems.length - 1 && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </List>
        <Box sx={{ mt: 3, px: 1 }}>
          <CTAButton 
            fullWidth
            onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
          >
            Book Call
          </CTAButton>
        </Box>
      </DrawerContent>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <StyledAppBar scrolled={scrolled} elevation={0}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
            <Toolbar sx={{ 
              justifyContent: 'space-between', 
              py: 1,
              minHeight: '64px !important'
            }}>
              <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              
              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navItems.map((item) => (
                    <NavButton 
                      key={item.label}
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                  <CTAButton 
                    onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
                  >
                    Book Call
                  </CTAButton>
                </Box>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    p: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(90deg)',
                      backgroundColor: 'rgba(0, 81, 165, 0.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
      </Slide>

      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </MobileDrawer>
    </>
  );
};

export default Navbar;