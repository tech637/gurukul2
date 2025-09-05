import React from 'react';
import { Box, Typography, Container, Stack, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ArrowDownIcon from './icons/ArrowDownIcon';

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

const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  borderRadius: theme.spacing(2),
  border: `2px solid ${theme.palette.grey[200]}`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 3, 2, 3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '32px',
  display: 'flex',
  alignItems: 'center'
}));

const CardImage = styled(Box)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const CardImageElement = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Changed back to 'cover' for proper filling
  borderRadius: 'inherit',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)' // Subtle zoom on hover
  }
});

const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '14px',
  letterSpacing: '0.5px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main
  }
}));

const NetworkSection: React.FC = () => {
  const features = [
    {
      icon: <EmojiEventsOutlinedIcon />,
      title: 'Build Your Venture',
      description: 'Turn your idea into a thriving startup with our expert guidance and proven frameworks.',
      action: 'LEARN MORE →',
      imageSrc: '/assets/venture-building.jpg',
      fallbackStyle: {
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)'
      }
    },
    {
      icon: <DiamondOutlinedIcon />,
      title: 'Accelerate Growth',
      description: 'Join our incubator program for mentorship, funding opportunities & rapid scaling.',
      action: 'DISCOVER PROGRAMS →',
      imageSrc: '/assets/growth.png',
      fallbackStyle: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    },
    {
      icon: <Groups2OutlinedIcon />,
      title: 'Join Our Community',
      description: 'Connect with like-minded founders and access resources for lifelong learning.',
      action: 'JOIN NOW',
      imageSrc: '/assets/joincommunity.png',
      fallbackStyle: {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      }
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
            <FeatureCard key={index}>
              <CardHeader>
                <IconWrapper>
                  {feature.icon}
                </IconWrapper>
                <Typography variant="h6" fontWeight={700} color="text.primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
                <ActionButton>
                  {feature.action}
                </ActionButton>
              </CardHeader>
              <CardImage sx={feature.fallbackStyle}>
                <CardImageElement 
                  src={feature.imageSrc} 
                  alt={feature.title}
                  loading="lazy"
                  onError={(e) => {
                    // Hide image on error, show gradient background
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    // Add a subtle fade-in effect when image loads
                    e.currentTarget.style.opacity = '0';
                    e.currentTarget.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => {
                      e.currentTarget.style.opacity = '1';
                    }, 100);
                  }}
                />
              </CardImage>
            </FeatureCard>
          ))}
        </CardsContainer>
      </Container>
    </SectionContainer>
  );
};

export default NetworkSection;