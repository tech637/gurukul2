import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import SettingsIcon from '@mui/icons-material/Settings';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const CenteredContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #FFD700 100%)`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(8, 4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(6, 3)
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(4, 2)
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  width: '100%'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(6),
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    fontSize: '48px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

const IllustrationContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  marginBottom: theme.spacing(4)
}));

const MainIllustration = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '250px'
  }
}));

const GuruImage = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `4px solid rgba(255, 255, 255, 0.5)`,
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '150px'
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
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  animation: `float 3s ease-in-out infinite ${delay}`,
  '& svg': {
    fontSize: '28px',
    color: theme.palette.primary.main
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    }
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    width: '45px',
    height: '45px',
    '& svg': {
      fontSize: '20px'
    }
  }
}));

const BooksStack = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-50px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '120px',
  height: '80px',
  background: `linear-gradient(45deg, 
    ${theme.palette.error.main} 0%, 
    ${theme.palette.warning.main} 25%, 
    ${theme.palette.info.main} 50%, 
    ${theme.palette.success.main} 75%, 
    ${theme.palette.secondary.main} 100%)`,
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-15px',
    left: '10px',
    width: '100px',
    height: '15px',
    background: theme.palette.warning.dark,
    borderRadius: '8px 8px 0 0'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-30px',
    left: '20px',
    width: '80px',
    height: '15px',
    background: theme.palette.info.dark,
    borderRadius: '8px 8px 0 0'
  }
}));

const NavigationControls = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  zIndex: 2,
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
    margin: `${theme.spacing(4)} auto 0`
  }
}));

const NavigationSide = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: theme.palette.common.white,
  width: '50px',
  height: '50px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    transform: 'scale(1.1)'
  },
  transition: 'all 0.3s ease'
}));

const DotsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1)
}));

const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.common.white : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    transform: 'scale(1.2)'
  }
}));

const ExploreCoursesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const floatingIcons = [
    { icon: <EmojiObjectsIcon />, top: '10%', left: '25%', delay: '0s' },
    { icon: <FilterVintageIcon />, top: '5%', left: '50%', delay: '0.5s' },
    { icon: <SettingsIcon />, top: '15%', left: '70%', delay: '1s' },
    { icon: <MenuBookIcon />, top: '60%', left: '20%', delay: '1.5s' },
    { icon: <LocationOnIcon />, top: '70%', left: '75%', delay: '2s' }
  ];

  return (
    <SectionContainer>
      <CenteredContent>
        <ContentWrapper>
          <SectionTitle>
            Explore Courses
          </SectionTitle>
          
          <IllustrationContainer>
            <MainIllustration>
              <GuruImage 
                src="https://images.unsplash.com/photo-1633307116510-607670fc5439?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtZWRpdGF0aW9uJTIwbW9uayUyMGd1cnUlMjBib29rcyUyMGVkdWNhdGlvbiUyMHNwaXJpdHVhbHxlbnwwfDJ8fG9yYW5nZXwxNzU3MDcxNTUxfDA&ixlib=rb-4.1.0&q=85"
                alt="Spiritual meditation guru - Shamblen Studios on Unsplash"
                style={{ width: '200px', height: '200px' }}
              />
              <BooksStack />
            </MainIllustration>
            
            {floatingIcons.map((item, index) => (
              <FloatingIcon
                key={index}
                top={item.top}
                left={item.left}
                delay={item.delay}
              >
                {item.icon}
              </FloatingIcon>
            ))}
          </IllustrationContainer>
          
          <NavigationControls>
            <NavigationSide>
              <NavButton onClick={handlePrevSlide}>
                <ArrowBackIcon />
              </NavButton>
              <DotsContainer>
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <Dot
                    key={index}
                    active={index === currentSlide}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </DotsContainer>
            </NavigationSide>
            
            <NavButton onClick={handleNextSlide}>
              <ArrowForwardIcon />
            </NavButton>
          </NavigationControls>
        </ContentWrapper>
      </CenteredContent>
    </SectionContainer>
  );
};

export default ExploreCoursesSection;