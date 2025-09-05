import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Stack,
  Button,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const slideTransition = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Types
interface FounderStory {
  id: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  icon: 'trophy' | 'star' | 'diamond';
  rating: number;
}

interface FounderStoriesSectionProps {
  stories?: FounderStory[];
}

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg, 
    #E2EEF9 0%,
    rgba(226, 238, 249, 0.8) 50%,
    #E2EEF9 100%
  )`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(0, 31, 63, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(120, 163, 206, 0.05) 0%, transparent 50%)
    `,
    pointerEvents: 'none'
  }
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  zIndex: 1
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: '#001F3F',
  fontSize: 'clamp(14px, 2vw, 16px)',
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  animation: `${slideInLeft} 0.8s ease-out`
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'serif',
  fontWeight: 700,
  fontSize: 'clamp(28px, 5vw, 40px)',
  lineHeight: 'clamp(36px, 6vw, 48px)',
  color: '#001F3F',
  letterSpacing: '-0.01em',
  marginBottom: theme.spacing(2),
  animation: `${slideInRight} 0.8s ease-out 0.2s both`,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(90deg, 
      transparent 0%, 
      #FEDB00 50%, 
      transparent 100%
    )`,
    borderRadius: '2px'
  }
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  animation: `${fadeInUp} 0.8s ease-out 0.4s both`
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: '#001F3F',
  color: '#FFFFFF',
  border: '2px solid #FEDB00',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: '#FEDB00',
    color: '#001F3F',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(254, 219, 0, 0.3)'
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px'
  }
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto'
}));

const CarouselTrack = styled(Box)<{ translateX: number; totalStories: number; cardsPerView: number }>(({ theme, translateX, totalStories, cardsPerView }) => ({
  display: 'flex',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: `translateX(${translateX}%)`,
  width: `${(totalStories / cardsPerView) * 100}%`, // Dynamic width based on total stories
  [theme.breakpoints.down('md')]: {
    width: `${totalStories * 100}%` // Full width for each card on mobile
  }
}));

const TestimonialCard = styled(Card)<{ cardsPerView: number }>(({ theme, cardsPerView }) => ({
  flex: `0 0 ${100 / cardsPerView}%`, // Dynamic flex based on cards per view
  maxWidth: '400px',
  width: '100%',
  borderRadius: theme.spacing(3),
  background: '#FFFFFF',
  border: '2px solid #FEDB00',
  boxShadow: '0 8px 32px rgba(0, 31, 63, 0.15)',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  margin: `0 ${theme.spacing(1)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 31, 63, 0.25)',
    '& .quote-icon': {
      transform: 'scale(1.1) rotate(5deg)'
    }
  },
  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%', // Full width on mobile
    margin: `0 ${theme.spacing(0.5)}`
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  background: '#001F3F',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, 
      #FEDB00 0%, 
      #78A3CE 50%, 
      #FEDB00 100%
    )`
  }
}));

const HeaderLeft = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const HeaderText = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '14px',
  letterSpacing: '1px',
  color: '#FFFFFF',
  textTransform: 'uppercase'
}));

const IconWrapper = styled(Box)(() => ({
  color: '#FEDB00',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    fontSize: '20px'
  }
}));

const RatingContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
}));

const StarIconStyled = styled(StarIcon)(() => ({
  color: '#FEDB00',
  fontSize: '16px'
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  textAlign: 'left',
  position: 'relative'
}));

const QuoteIcon = styled(Box)(() => ({
  position: 'absolute',
  top: '-20px',
  right: '20px',
  width: '60px',
  height: '60px',
  background: '#FEDB00',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#001F3F',
  fontSize: '24px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '28px'
  }
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3)
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  border: `3px solid #FEDB00`,
  boxShadow: '0 4px 12px rgba(0, 31, 63, 0.2)'
}));

const UserDetails = styled(Box)(() => ({
  flex: 1
}));

const UserName = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '16px',
  color: '#001F3F',
  marginBottom: '4px'
}));

const UserTitle = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#78A3CE',
  fontWeight: 500
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  lineHeight: 1.6,
  color: '#001F3F',
  fontSize: '15px',
  marginBottom: theme.spacing(2),
  position: 'relative',
  zIndex: 1
}));

const TestimonialTitle = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '16px',
  color: '#001F3F',
  marginBottom: '8px'
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

const FloatingShape = styled(Box)<{ top: string; left: string; delay: string; size: string }>(({ theme, top, left, delay, size }) => ({
  position: 'absolute',
  top,
  left,
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle, 
    rgba(0, 31, 63, 0.1) 0%, 
    transparent 70%
  )`,
  animation: `${float} 6s ease-in-out infinite ${delay}`
}));

// Default data
const defaultStories: FounderStory[] = [
  {
    id: '1',
    name: 'Nitish',
    title: 'Co-Founder',
    company: 'Tech Startup',
    testimonial: 'Working with Aditya Ventures helped me identify the core metrics that actually matter for our diagnostic call alone worth 10X investment.',
    avatarUrl: '../assets/nitish.jpg',
    icon: 'trophy',
    rating: 5
  },
  {
    id: '2',
    name: 'Vandana',
    title: 'Co-Founder',
    company: 'Fintech Platform',
    testimonial: 'Aditya\'s approach to founder-market fit has completely changed how we think about product development and eliminated blind spots that existed.',
    avatarUrl: '../assets/vandana.jpg',
    icon: 'star',
    rating: 5
  },
  {
    id: '3',
    name: 'Divyansh',
    title: 'Co-Founder',
    company: 'SaaS Platform',
    testimonial: 'From idea to first paying customers in 6 weeks. The system works when you follow the process and stay accountable.',
    avatarUrl: '../assets/divyansh.jpg',
    icon: 'diamond',
    rating: 5
  },
  {
    id: '4',
    name: 'Divyansh',
    title: 'Co-Founder',
    company: 'SaaS Platform',
    testimonial: 'From idea to first paying customers in 6 weeks. The system works when you follow the process and stay accountable.',
    avatarUrl: '../assets/divyansh.jpg',
    icon: 'diamond',
    rating: 5
  },
  {
    id: '5',
    name: 'Divyansh',
    title: 'Co-Founder',
    company: 'SaaS Platform',
    testimonial: 'From idea to first paying customers in 6 weeks. The system works when you follow the process and stay accountable.',
    avatarUrl: '../assets/divyansh.jpg',
    icon: 'diamond',
    rating: 5
  }
];

// Icon mapping
const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'trophy':
      return <EmojiEventsIcon />;
    case 'star':
      return <StarIcon />;
    case 'diamond':
      return <DiamondIcon />;
    default:
      return <EmojiEventsIcon />;
  }
};

// Main Component
const FounderStoriesSection: React.FC<FounderStoriesSectionProps> = ({
  stories = defaultStories
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const totalStories = stories.length;
  const cardsPerView = isMobile ? 1 : 3; // Show 1 card on mobile, 3 on desktop
  const maxIndex = Math.max(0, totalStories - cardsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return maxIndex; // Jump to last possible position
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Jump to first position
      }
      return prev + 1;
    });
  };

  // Calculate translateX for carousel
  const translateX = -(currentIndex * (100 / cardsPerView)); // Each card takes 1/cardsPerView of container

  return (
    <SectionContainer id="success">
      <FloatingElements>
        <FloatingShape top="10%" left="10%" delay="0s" size="60px" />
        <FloatingShape top="20%" left="85%" delay="2s" size="40px" />
        <FloatingShape top="70%" left="5%" delay="4s" size="50px" />
        <FloatingShape top="60%" left="90%" delay="1s" size="35px" />
      </FloatingElements>

      <Container maxWidth="lg">
        <SectionHeader>
          <SectionSubtitle>
            Entrepreneurs Who Transformed with Our Coaching
          </SectionSubtitle>
          <SectionTitle>
            A SMALL GLIMPSE OF CLIENT SUCCESS STORIES!
          </SectionTitle>
        </SectionHeader>

        <NavigationContainer>
          <NavButton onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </NavButton>
          <NavButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </NavButton>
        </NavigationContainer>

        <CarouselContainer>
          <CarouselTrack translateX={translateX} totalStories={totalStories} cardsPerView={cardsPerView}>
            {stories.map((story, index) => (
              <TestimonialCard 
                key={story.id}
                cardsPerView={cardsPerView}
                sx={{ 
                  animation: `${fadeInUp} 0.8s ease-out ${0.6 + index * 0.2}s both`
                }}
              >
                <CardHeader>
                  <HeaderLeft>
                    <IconWrapper>
                      {getIcon(story.icon)}
                    </IconWrapper>
                    <HeaderText>
                      Success Story
                    </HeaderText>
                  </HeaderLeft>
                  <RatingContainer>
                    {[...Array(story.rating)].map((_, i) => (
                      <StarIconStyled key={i} />
                    ))}
                  </RatingContainer>
                </CardHeader>
                
                <CardContentStyled>
                  <QuoteIcon className="quote-icon">
                    <FormatQuoteIcon />
                  </QuoteIcon>
                  
                  <UserInfo>
                    <UserAvatar
                      src={story.avatarUrl}
                      alt={`${story.name} - ${story.title}`}
                    />
                    <UserDetails>
                      <UserName>
                        {story.name}
                      </UserName>
                      <UserTitle>
                        {story.title}, {story.company}
                      </UserTitle>
                    </UserDetails>
                  </UserInfo>
                  
                  <TestimonialTitle>
                    Success Story
                  </TestimonialTitle>
                  
                  <TestimonialText>
                    {story.testimonial}
                  </TestimonialText>
                </CardContentStyled>
              </TestimonialCard>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </Container>
    </SectionContainer>
  );
};

export default FounderStoriesSection;