import React from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const SectionContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #0B1A3A 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12, 0)
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(254, 185, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 81, 165, 0.08) 0%, transparent 50%)
    `,
    pointerEvents: 'none'
  }
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center'
}));



const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  marginBottom: theme.spacing(1)
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2)
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: theme.spacing(2),
  textAlign: 'center'
}));

const FeaturesList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2)
  }
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2),
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateX(3px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(2.5, 5),
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: theme.spacing(3),
  boxShadow: '0 8px 25px rgba(254, 185, 0, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  marginTop: theme.spacing(3),
  width: '100%',
  minHeight: '48px',
  position: 'relative',
  overflow: 'hidden',
  animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(254, 185, 0, 0.4)',
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
  },
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    minWidth: '250px'
  }
}));

const TrustBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  marginBottom: theme.spacing(3),
  width: 'fit-content',
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`
}));

const SupportSection: React.FC = () => {
  
  const sprint1Features = [
    'Entrepreneurial Mindset',
    'Innovation and Product Thinking',
    'Building Low/No Cost MVP',
    'Go-to-Market Strategy (GTMS)',
    'Financial Modelling',
    'Fundraising 101',
    'Creating a Winning Pitch Deck',
    'Advanced Fundraising Strategies'
  ];

  return (
    <SectionContainer id="support">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <ContentWrapper>
          <TrustBadge>
            <StarIcon sx={{ color: theme => theme.palette.secondary.main, fontSize: '18px' }} />
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, fontSize: '12px' }}>
              Only ₹3,499 - Limited Time
            </Typography>
          </TrustBadge>

          <MainHeading variant="h2">
            Converting Marathons into Sprints
          </MainHeading>
          
          <DescriptionText>
            Traditional entrepreneurship education is like running a marathon - overwhelming and exhausting. 
            We break down the startup journey into focused, achievable sprints.
          </DescriptionText>
          
          <DescriptionText>
            A sprint is a concentrated, time-bound learning experience that takes you from confusion to clarity, from idea to action. 
            Get hands-on, practical guidance that moves you forward fast.
          </DescriptionText>
          
          <DescriptionText>
            Each sprint delivers real results: validate ideas, build MVPs, and create momentum while learning the fundamentals that matter.
          </DescriptionText>

          <SubHeading variant="h4">
            Sprint 1 - Validation with Fundamentals
          </SubHeading>
          
          <DescriptionText>
            Designed for curious entrepreneurs and founding teams who are serious about starting up the right way. 
            If you've got an idea and feel overwhelmed about how to begin, this sprint will give you the complete roadmap.
          </DescriptionText>
          
          <DescriptionText>
            Unlearn and relearn the core fundamentals through 8 powerful modules that take you from first spark to first revenue. 
            Validate before you commit, sell before you build, and optimize your cashflow & finances.
          </DescriptionText>
          
          <FeaturesList>
            {sprint1Features.map((feature, index) => (
              <FeatureItem 
                key={index}
                sx={{ 
                  animation: `${fadeInUp} 0.8s ease-out ${0.6 + index * 0.1}s both` 
                }}
              >
                <CheckCircleIcon sx={{ 
                  color: theme => theme.palette.secondary.main, 
                  fontSize: '18px',
                  flexShrink: 0
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'white', 
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                  {feature}
                </Typography>
              </FeatureItem>
            ))}
          </FeaturesList>
          
          <CTAButton 
            onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68625a098940d4ca05513d8e', '_blank')}
          >
            Join Sprint 1
          </CTAButton>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default SupportSection;