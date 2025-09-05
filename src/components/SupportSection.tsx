import React from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
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

const SupportImage = styled('img')(({ theme }) => ({
  width: '400px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '225px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '188px'
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2, 4),
  fontSize: '18px',
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
  }
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
              9 out of 10 startups fail because founders try to navigate chaos alone. We exist to change that through our program.
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ fontSize: '24px', lineHeight: 1.4 }}>
              Join our comprehensive program and get the support, mentorship, and resources you need to build a successful venture.
            </Typography>
            <CTAButton 
              onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68944bb80d6a0376fee41207', '_blank')}
            >
              Purchase Program
            </CTAButton>
          </TextContent>
          
          <ImageWrapper>
            <SupportImage 
              src="/assets/back.png" 
              alt="Support illustration showing nurturing and growth"
            />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default SupportSection;