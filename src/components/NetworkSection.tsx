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
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`
}));

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
      description: 'Turn or a restaurant owner gow a thriving startup startup with our our expert guidance auidance at it.',
      action: 'LEARN MORE →',
      imageStyle: {
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)'
      }
    },
    {
      icon: <DiamondOutlinedIcon />,
      title: 'Accelerate Growth',
      description: 'Join our inbucator or delivery riders delivership for mentorship, funding opportunities & rapid scaling.',
      action: 'DISCOVER PROGRAMS →',
      imageStyle: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    },
    {
      icon: <Groups2OutlinedIcon />,
      title: 'Join Our Community',
      description: 'If you are passionate about helping us achieve our goal to & resources for lifelong meals join team.',
      action: 'JOIN NOW',
      imageStyle: {
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
              <CardImage sx={feature.imageStyle} />
            </FeatureCard>
          ))}
        </CardsContainer>
      </Container>
    </SectionContainer>
  );
};

export default NetworkSection;