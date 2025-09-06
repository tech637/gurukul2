import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Stack, Button, Fade, Slide, Chip, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SupportIcon from '@mui/icons-material/Support';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
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

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #D6E9FF 50%, #B8E6FF 100%)`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '80px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(254, 185, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 81, 165, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(74, 144, 226, 0.08) 0%, transparent 50%)
    `,
    zIndex: 0
  }
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  maxWidth: '100%',
  margin: '0 auto',
  padding: theme.spacing(2),
  animation: `${fadeInUp} 0.8s ease-out`,
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
    padding: theme.spacing(3)
  }
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main, // Navy blue
  fontWeight: 900,
  letterSpacing: '-0.01em',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  animation: `${pulse} 4s ease-in-out infinite`,
  marginBottom: theme.spacing(1)
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
  animation: `${slideInLeft} 0.8s ease-out 0.2s both`
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: '100%',
  lineHeight: 1.6,
  fontWeight: 400,
  marginBottom: theme.spacing(2),
  animation: `${slideInRight} 0.8s ease-out 0.4s both`,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '600px'
  }
}));

const ButtonGroup = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  marginTop: theme.spacing(3),
  animation: `${fadeInUp} 0.8s ease-out 0.6s both`,
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    width: 'auto',
    gap: theme.spacing(3)
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(2, 4),
  fontWeight: 700,
  borderRadius: theme.spacing(3),
  boxShadow: '0 6px 20px rgba(254, 185, 0, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  minHeight: '48px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(254, 185, 0, 0.4)',
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
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(2, 4),
  fontWeight: 600,
  borderRadius: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  minHeight: '48px',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 81, 165, 0.3)'
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

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.spacing(3),
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  animation: `${fadeInUp} 0.8s ease-out 0.8s both`,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(3),
    padding: theme.spacing(4)
  }
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)'
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2)
  }
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main, // Navy blue
  lineHeight: 1,
  marginBottom: theme.spacing(0.5),
  fontWeight: 900
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}));

const FloatingElements = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const FloatingIcon = styled(Box)<{ top: string; left: string; delay: string }>(({ theme, top, left, delay }) => ({
  position: 'absolute',
  top,
  left,
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  animation: `${float} 6s ease-in-out infinite ${delay}`,
  '& svg': {
    fontSize: '24px',
    color: theme.palette.primary.main
  }
}));


const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <HeroContainer>
      <FloatingElements>
        <FloatingIcon top="15%" left="10%" delay="0s">
          <SupportIcon />
        </FloatingIcon>
        <FloatingIcon top="25%" left="85%" delay="2s">
          <TrendingUpIcon />
        </FloatingIcon>
        <FloatingIcon top="70%" left="5%" delay="4s">
          <GroupIcon />
        </FloatingIcon>
      </FloatingElements>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <ContentWrapper>
          <SubHeading>
            by Acharya Ventures
          </SubHeading>
          <MainHeading variant="h1">
            Startup Gurukul
          </MainHeading>
          <DescriptionText>
          Fix your biggest startup bottleneck in 60 minutes.<br/>
          Leave with a personalised 14‑day plan you can run tomorrow.
          </DescriptionText>

          <ButtonGroup>
            <PrimaryButton 
              onClick={() => window.open('https://learn.acharyaventures.com/web/checkout/68a96fa008d13b580d258227', '_blank')}
            >
              Book Call
            </PrimaryButton>
          </ButtonGroup>

          <StatsContainer>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '32px', md: '36px' } }}>
                500+
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
                Founders Trained
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '32px', md: '36px' } }}>
                ₹50Cr+
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
                Revenue Generated
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '32px', md: '36px' } }}>
                95%
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
                Success Rate
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber sx={{ fontSize: { xs: '24px', sm: '32px', md: '36px' } }}>
                24/7
              </StatNumber>
              <StatLabel sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
                Expert Support
              </StatLabel>
            </StatItem>
          </StatsContainer>
        </ContentWrapper>
      </Container>

    </HeroContainer>
  );
};

export default HeroSection;