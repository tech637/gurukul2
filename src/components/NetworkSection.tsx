import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ArrowDownIcon from './icons/ArrowDownIcon';
import NetworkCard from './NetworkCard';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.text.primary} 33.65%, ${theme.palette.secondary.main} 80.29%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textAlign: 'center',
  marginBottom: theme.spacing(6)
}));

const CardsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const NetworkSection: React.FC = () => {
  const features = [
    {
      icon: <EmojiEventsOutlinedIcon />,
      title: 'Build Your Venture',
      description: 'Turn or a restaurant owner gow a thriving startup startup with our our expert guidance auidance at it.',
      action: 'LEARN MORE →',
      imageUrl: 'https://images.unsplash.com/photo-1514820720301-4c4790309f46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0cm9waHklMjBzdWNjZXNzJTIwYWNoaWV2ZW1lbnQlMjBidXNpbmVzc3xlbnwwfDB8fHwxNzU3MDc0MjAyfDA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Trophy, success, achievement, business venture, startup success, golden trophy, winner, accomplishment - Photo by Ariel on Unsplash'
    },
    {
      icon: <DiamondOutlinedIcon />,
      title: 'Accelerate Growth',
      description: 'Join our inbucator or delivery riders delivership for mentorship, funding opportunities & rapid scaling.',
      action: 'DISCOVER PROGRAMS →',
      imageUrl: 'https://images.unsplash.com/photo-1592136184798-ca0d8e17643a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxkaWFtb25kJTIwZ3Jvd3RoJTIwY2hhcnQlMjBwcm9ncmVzc3xlbnwwfDB8fGJsdWV8MTc1NzA3NDIwMXww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Diamond, growth, acceleration, scaling, business growth, upward trend, progress, development - Photo by Daniele Levis Pelusi on Unsplash'
    },
    {
      icon: <Groups2OutlinedIcon />,
      title: 'Join Our Community',
      description: 'If you are passionate about helping us achieve our goal to & resources for lifelong meals join team.',
      action: 'JOIN NOW',
      imageUrl: 'https://images.unsplash.com/photo-1732209556962-df3c1334bc47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHx0ZWFtJTIwY29tbXVuaXR5JTIwcGVvcGxlJTIwY29sbGFib3JhdGlvbnxlbnwwfDB8fHwxNzU3MDc0MjAyfDA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Community, team, collaboration, networking, people together, teamwork, group, partnership - Photo by Mushvig Niftaliyev on Unsplash'
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={2} sx={{ mb: 4 }}>
          <GradientTitle variant="h2">
            Join our growing network
          </GradientTitle>
          <ArrowDownIcon width={40} height={40} color="#d1d5db" />
        </Stack>
        
        <CardsContainer>
          {features.map((feature, index) => (
            <NetworkCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              action={feature.action}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
            />
          ))}
        </CardsContainer>
      </Container>
    </SectionContainer>
  );
};

export default NetworkSection;