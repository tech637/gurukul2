import React from 'react';
import {
  Box,
  Typography,
  Container,
  Stack,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FounderProfile from './FounderProfile';
import FounderMessage from './FounderMessage';

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  fontWeight: 800,
  color: theme.palette.text.primary,
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(6)
  }
}));

const FounderCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3),
  border: `3px solid ${theme.palette.primary.main}`,
  boxShadow: '0 12px 48px rgba(0, 81, 165, 0.15)',
  background: theme.palette.background.paper,
  maxWidth: 1200,
  margin: '0 auto'
}));

const ContentContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(6),
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    textAlign: 'center'
  }
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  minWidth: 300,
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
    width: '100%'
  }
}));

const MessageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

// Main Component
const FounderStoriesSection: React.FC = () => {
  const founderData = {
    name: 'Aditya Bajaj',
    imageUrl: 'https://i.pravatar.cc/400?img=15',
    imageAlt: 'Aditya Bajaj - Founder and Business Coach',
    messages: [
      'Aditya has built, scaled, and exited multiple ventures across D2C, Tech Platforms and Services.',
      'He teaches entrepreneurship at IE Business School, Spain and has mentored over 200 founders who have collectively raised more than ₹50 Cr.'
    ],
    highlightMessage: 'His approach is structured, scientific, and relentlessly practical.'
  };

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          About Your Coach
        </SectionTitle>
        
        <FounderCard elevation={0}>
          <ContentContainer>
            <ProfileSection>
              <FounderProfile
                name={founderData.name}
                imageUrl={founderData.imageUrl}
                imageAlt={founderData.imageAlt}
              />
            </ProfileSection>
            
            <MessageSection>
              <FounderMessage
                messages={founderData.messages}
                highlightMessage={founderData.highlightMessage}
              />
            </MessageSection>
          </ContentContainer>
        </FounderCard>
      </Container>
    </SectionContainer>
  );
};

export default FounderStoriesSection;