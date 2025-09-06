import React from 'react';
import { Box, Typography, Container, Stack, Card } from '@mui/material';
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

const CardImageContainer = styled(Box)(({ theme }) => ({
  height: 300,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  backgroundColor: theme.palette.grey[100]
}));

// Image Card Component
interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
  return (
    <CardImageContainer>
      <Box
        component="img"
        src={imageSrc}
        alt={imageAlt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </CardImageContainer>
  );
};

const NetworkSection: React.FC = () => {
  const features = [
    {
      icon: <EmojiEventsOutlinedIcon />,
      title: 'Build Your Venture',
      description: 'Turn your idea into a thriving startup with our expert guidance and proven frameworks.',
      imageSrc: '/assets/venture-image.png', // Replace with your image path
      imageAlt: 'Build Your Venture'
    },
    {
      icon: <DiamondOutlinedIcon />,
      title: 'Accelerate Growth',
      description: 'Join our incubator program for mentorship, funding opportunities & rapid scaling.',
      imageSrc: '/assets/growth-image.png', // Replace with your image path
      imageAlt: 'Accelerate Growth'
    },
    {
      icon: <Groups2OutlinedIcon />,
      title: 'Join Our Community',
      description: 'Connect with like-minded founders and access resources for lifelong learning.',
      imageSrc: '/assets/community-image.png', // Replace with your image path
      imageAlt: 'Join Our Community'
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
              </CardHeader>
              <ImageCard
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
              />
            </FeatureCard>
          ))}
        </CardsContainer>
      </Container>
    </SectionContainer>
  );
};

export default NetworkSection;