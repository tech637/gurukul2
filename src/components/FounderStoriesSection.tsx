import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';

// Types
interface FounderStory {
  id: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  icon: 'trophy' | 'star' | 'diamond';
}

interface FounderStoriesSectionProps {
  stories?: FounderStory[];
}

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 600,
  color: theme.palette.text.primary
}));

const StoriesGrid = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3)
  }
}));

const StoryCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  width: '100%',
  borderRadius: theme.spacing(2),
  border: `2px solid ${theme.palette.grey[300]}`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  background: '#001F3F', // Navy blue background
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  position: 'relative'
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '14px',
  letterSpacing: '1px',
  color: '#FFFFFF', // White text
  textTransform: 'uppercase'
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: '#FFFFFF', // White icon
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    fontSize: '20px'
  }
}));

const StoryContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2.5)
}));

const FounderAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `3px solid ${theme.palette.grey[200]}`,
  marginBottom: theme.spacing(1)
}));

const TestimonialContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2)
}));

const QuoteIcon = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  lineHeight: 1
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  fontSize: '14px',
  textAlign: 'center',
  padding: theme.spacing(0, 1)
}));

const FounderName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5)
}));

const FounderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  fontWeight: 500
}));

const ReadMoreLink = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.secondary.main,
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline'
  }
}));

// Default data
const defaultStories: FounderStory[] = [
  {
    id: '1',
    name: 'Nitish',
    title: '',
    company: 'Co-Founder, Tech Startup',
    testimonial: 'Working with Aditya Ventures helped me identify the core metrics that actually matter for our diagnostic call alone worth 10X investment.',
    avatarUrl: '../assets/nitish.jpg',
    icon: 'trophy'
  },
  {
    id: '2',
    name: 'Vandana',
    title: '',
    company: 'Co-Founder, Fintech Platform',
    testimonial: 'Aditya\'s approach to founder-market fit has completely changed how we think about product development and eliminated blind spots that existed.',
    avatarUrl: '../assets/vandana.jpg',
    icon: 'star'
  },
  {
    id: '3',
    name: 'Divyansh',
    title: '',
    company: 'Co-Founder SaaS Platform',
    testimonial: 'From idea to first paying customers in 6 weeks. The system works when you follow the process and stay accountable.',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    icon: 'diamond'
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
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h4" >
          Founder Stories
        </SectionTitle>
        
        <StoriesGrid>
          {stories.map((story) => (
            <StoryCard key={story.id}>
              <CardHeader>
                <IconWrapper>
                  {getIcon(story.icon)}
                </IconWrapper>
                <HeaderText >
                  Founder Story
                </HeaderText>
              </CardHeader>
              
              <StoryContent>
                <FounderAvatar
                  src={story.avatarUrl}
                  alt={`${story.name} - ${story.title}`}
                />
                
                <TestimonialContainer>
                  <Stack direction="row" alignItems="flex-start" spacing={0.5}>
                    
                    <TestimonialText>
                      {story.testimonial}
                    </TestimonialText>
                    
                  </Stack>
                </TestimonialContainer>
                
                <Box textAlign="center">
                  <FounderName>
                    {story.name}, {story.title}
                  </FounderName>
                  {story.company && (
                    <FounderTitle>
                      {story.company}
                    </FounderTitle>
                  )}
                </Box>
                
                
              </StoryContent>
            </StoryCard>
          ))}
        </StoriesGrid>
      </Container>
    </SectionContainer>
  );
};

export default FounderStoriesSection;