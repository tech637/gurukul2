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
  const supportSvg = (
    <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="backGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="chaosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#bgGradient)"/>
      
      {/* Chaos elements (representing startup challenges) */}
      <circle cx="80" cy="80" r="15" fill="url(#chaosGradient)" opacity="0.7"/>
      <circle cx="320" cy="100" r="12" fill="url(#chaosGradient)" opacity="0.7"/>
      <circle cx="150" cy="60" r="10" fill="url(#chaosGradient)" opacity="0.7"/>
      <circle cx="250" cy="70" r="8" fill="url(#chaosGradient)" opacity="0.7"/>
      <circle cx="350" cy="50" r="14" fill="url(#chaosGradient)" opacity="0.7"/>
      
      {/* Central figure - founder facing chaos */}
      <circle cx="200" cy="150" r="25" fill="#fbbf24"/>
      <rect x="185" y="175" width="30" height="50" fill="#3b82f6"/>
      
      {/* Supportive hands/back support - more prominent */}
      <path d="M120 180 Q140 160 160 180 Q180 200 200 180" 
            stroke="url(#backGradient)" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M280 180 Q300 160 320 180 Q340 200 360 180" 
            stroke="url(#backGradient)" strokeWidth="10" fill="none" strokeLinecap="round"/>
      
      {/* Additional support elements */}
      <circle cx="130" cy="170" r="5" fill="#fbbf24" opacity="0.8"/>
      <circle cx="270" cy="170" r="5" fill="#fbbf24" opacity="0.8"/>
      <circle cx="140" cy="190" r="4" fill="#10b981" opacity="0.8"/>
      <circle cx="260" cy="190" r="4" fill="#10b981" opacity="0.8"/>
      
      {/* Support network lines */}
      <line x1="200" y1="150" x2="120" y2="180" stroke="#fff" strokeWidth="3" opacity="0.8"/>
      <line x1="200" y1="150" x2="280" y2="180" stroke="#fff" strokeWidth="3" opacity="0.8"/>
      <line x1="200" y1="150" x2="200" y2="100" stroke="#fff" strokeWidth="3" opacity="0.8"/>
      
      {/* Success path/arrow pointing up */}
      <path d="M200 100 L200 50 L190 60 L200 50 L210 60 Z" 
            fill="#10b981" stroke="#fff" strokeWidth="2"/>
      
      {/* Program elements - structured support with icons */}
      <rect x="50" y="220" width="60" height="40" fill="#10b981" opacity="0.8" rx="5"/>
      <circle cx="80" cy="235" r="8" fill="#fff" opacity="0.9"/>
      
      <rect x="130" y="210" width="60" height="50" fill="#3b82f6" opacity="0.8" rx="5"/>
      <rect x="150" y="225" width="20" height="20" fill="#fff" opacity="0.9" rx="3"/>
      
      <rect x="210" y="200" width="60" height="60" fill="#8b5cf6" opacity="0.8" rx="5"/>
      <polygon points="230,220 240,210 250,220 240,230" fill="#fff" opacity="0.9"/>
      
      <rect x="290" y="210" width="60" height="50" fill="#f59e0b" opacity="0.8" rx="5"/>
      <circle cx="320" cy="235" r="6" fill="#fff" opacity="0.9"/>
      
      {/* Connection from founder to program */}
      <line x1="200" y1="200" x2="80" y2="240" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="200" y1="200" x2="160" y2="230" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="200" y1="200" x2="240" y2="220" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="200" y1="200" x2="320" y2="230" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      
      {/* Visual success indicators instead of text */}
      <circle cx="200" cy="40" r="8" fill="#10b981"/>
      <circle cx="180" cy="35" r="6" fill="#3b82f6"/>
      <circle cx="220" cy="35" r="6" fill="#8b5cf6"/>
      
      {/* Program support visual indicators */}
      <circle cx="200" cy="280" r="6" fill="#fbbf24"/>
      <circle cx="180" cy="275" r="4" fill="#10b981"/>
      <circle cx="220" cy="275" r="4" fill="#3b82f6"/>
    </svg>
  );

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
            {supportSvg}
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default SupportSection;