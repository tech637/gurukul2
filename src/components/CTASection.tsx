import React from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

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

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
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
      radial-gradient(circle at 20% 20%, rgba(254, 185, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: 'none'
  }
}));

const ContentWrapper = styled(Box)(() => ({
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: theme.spacing(2),
  letterSpacing: '-0.01em',
  animation: `${pulse} 4s ease-in-out infinite`
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: theme.spacing(4),
  fontWeight: 500,
  lineHeight: 1.5
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(3)
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4)
  }
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  color: theme.palette.secondary.main,
  lineHeight: 1,
  marginBottom: theme.spacing(0.5)
}));

const StatLabel = styled(Typography)(() => ({
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}));

const ButtonGroup = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    width: 'auto',
    gap: theme.spacing(3)
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(2.5, 4),
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: theme.spacing(3),
  boxShadow: '0 8px 25px rgba(254, 185, 0, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  minHeight: '48px',
  position: 'relative',
  overflow: 'hidden',
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
    minWidth: '200px'
  }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  border: `2px solid rgba(255, 255, 255, 0.3)`,
  padding: theme.spacing(2.5, 4),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.spacing(3),
  backdropFilter: 'blur(10px)',
  background: 'rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  minHeight: '48px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    transform: 'translateY(-2px)'
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
    minWidth: '200px'
  }
}));

const TrustBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  width: 'fit-content'
}));

const FloatingElements = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const FloatingIcon = styled(Box)<{ top: string; left: string; delay: string }>(({ theme, top, left, delay }) => ({
  position: 'absolute',
  top,
  left,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${float} 6s ease-in-out infinite ${delay}`,
  '& svg': {
    fontSize: '20px',
    color: theme.palette.secondary.main
  }
}));

const CTASection: React.FC = () => {

  return (
    <SectionContainer>
      <FloatingElements>
        <FloatingIcon top="15%" left="10%" delay="0s">
          <StarIcon />
        </FloatingIcon>
        <FloatingIcon top="25%" left="85%" delay="2s">
          <TrendingUpIcon />
        </FloatingIcon>
        <FloatingIcon top="70%" left="5%" delay="4s">
          <StarIcon />
        </FloatingIcon>
      </FloatingElements>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <ContentWrapper>
          <TrustBadge sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
            <StarIcon sx={{ color: theme => theme.palette.secondary.main, fontSize: '18px' }} />
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, fontSize: '12px' }}>
              Join 500+ Successful Founders
            </Typography>
          </TrustBadge>

          <MainHeading variant="h2" sx={{ animation: `${slideInLeft} 0.8s ease-out 0.2s both` }}>
            Ready to Scale Your Startup?
          </MainHeading>
          
          <SubHeading variant="h5" sx={{ animation: `${slideInRight} 0.8s ease-out 0.4s both` }}>
            Don't navigate the startup journey alone. Join our comprehensive Sprint and get the support, mentorship, and resources you need to build a successful venture.
          </SubHeading>
          
          <StatsContainer sx={{ animation: `${fadeInUp} 0.8s ease-out 0.6s both` }}>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }}>
                95%
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '11px' } }}>
                Success Rate
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }}>
                ₹50Cr+
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '11px' } }}>
                Revenue Generated
              </StatLabel>
            </StatItem>
            <StatItem sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }}>
                24/7
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '11px' } }}>
                Expert Support
              </StatLabel>
            </StatItem>
          </StatsContainer>
          
          <ButtonGroup sx={{ animation: `${fadeInUp} 0.8s ease-out 0.8s both` }}>
            <PrimaryButton 
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
            >
              Book Call
            </PrimaryButton>
            <SecondaryButton 
              onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68625a098940d4ca05513d8e', '_blank')}
            >
              Join Sprint
            </SecondaryButton>
          </ButtonGroup>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default CTASection;