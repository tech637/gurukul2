import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
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
  fontSize: 'clamp(16px, 3vw, 20px)',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  animation: `${slideInLeft} 0.8s ease-out`,
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(18px, 4vw, 22px)',
    fontWeight: 700
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'serif',
  fontWeight: 900,
  fontSize: 'clamp(24px, 6vw, 48px)',
  lineHeight: 'clamp(32px, 7vw, 56px)',
  color: '#001F3F',
  letterSpacing: '-0.01em',
  marginBottom: theme.spacing(3),
  animation: `${slideInRight} 0.8s ease-out 0.2s both`,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(28px, 8vw, 36px)',
    lineHeight: 'clamp(36px, 9vw, 44px)',
    fontWeight: 900
  },
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

const StoriesGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  animation: `${fadeInUp} 0.8s ease-out 0.4s both`
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(3),
  background: '#FFFFFF',
  border: '2px solid #FEDB00',
  boxShadow: '0 8px 32px rgba(0, 31, 63, 0.15)',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 31, 63, 0.25)',
    '& .quote-icon': {
      transform: 'scale(1.1) rotate(5deg)'
    }
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          <SectionSubtitle component="h3" variant="h3">
            Entrepreneurs Who Transformed with Our Coaching
          </SectionSubtitle>
          <SectionTitle component="h2" variant="h2">
            A SMALL GLIMPSE OF CLIENT SUCCESS STORIES!
          </SectionTitle>
        </SectionHeader>

        <StoriesGrid container spacing={3}>
          {stories.map((story, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={story.id}
              sx={{ 
                animation: `${fadeInUp} 0.8s ease-out ${0.6 + index * 0.2}s both`
              }}
            >
              <TestimonialCard>
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
            </Grid>
          ))}
        </StoriesGrid>
      </Container>
    </SectionContainer>
  );
};

export default FounderStoriesSection;