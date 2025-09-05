import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #D6E9FF 100%)`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/assets/hero-background.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: 0
  }
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  alignItems: 'center',
  gap: theme.spacing(3)
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.text.primary} 33.65%, ${theme.palette.secondary.main} 80.29%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Typography variant="h1" color="text.primary">
            Startup Gurukul
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            by Acharya Ventures
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ maxWidth: '600px', mt: 2 }}
          >
            A nest for curious founders and early builders to learn, experiment and take flight
          </Typography>
        </ContentWrapper>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;