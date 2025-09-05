import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden'
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(8),
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(4)
  }
}));

const TextContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: theme.spacing(3)
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '200px',
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto'
  }
}));

const CoinImage = styled('img')(({ theme }) => ({
  width: '180px',
  height: 'auto',
  filter: 'drop-shadow(0 10px 30px rgba(254, 185, 0, 0.3))'
}));

const SupportSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <TextContent>
            <Typography variant="h2" color="inherit">
              We have your Back
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ fontSize: '24px', lineHeight: 1.4 }}>
              9 out of 10 startups fail because founders try to navigate chaos alone. We exist to change that through three pillars.
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ fontSize: '24px', lineHeight: 1.4 }}>
              Let's deliver happiness to your doorstep in minutes.
            </Typography>
          </TextContent>
          
          <ImageWrapper>
            <CoinImage 
              src="/assets/coin-medal.png" 
              alt="Golden coin and medal illustration"
            />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default SupportSection;