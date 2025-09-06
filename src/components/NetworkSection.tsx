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
  height: 200,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  backgroundColor: theme.palette.grey[100]
}));


// SVG Card Component
interface SvgCardProps {
  svgContent: React.ReactNode;
}

const SvgCard: React.FC<SvgCardProps> = ({ svgContent }) => {
  return (
    <CardImageContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }}
      >
        {svgContent}
      </Box>
    </CardImageContainer>
  );
};

const NetworkSection: React.FC = () => {
  // SVG Illustrations for each card
  const ventureSvg = (
    <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0B1A3A"/>
      
      {/* Building blocks representing venture building */}
      <rect x="100" y="200" width="60" height="80" fill="#FBBF24" rx="8"/>
      <rect x="180" y="180" width="60" height="100" fill="#3B82F6" rx="8"/>
      <rect x="260" y="160" width="60" height="120" fill="#10B981" rx="8"/>
      <rect x="340" y="140" width="60" height="140" fill="#F87171" rx="8"/>
      
      {/* Growth arrow */}
      <path d="M50 350 L150 250 L250 300 L350 200 L450 250 L550 150 L650 200" 
            stroke="#FACC15" strokeWidth="4" fill="none" strokeLinecap="round"/>
      
      {/* Success indicators */}
      <circle cx="200" cy="100" r="8" fill="#fff"/>
      <circle cx="400" cy="80" r="8" fill="#fff"/>
      <circle cx="600" cy="90" r="8" fill="#fff"/>
      
      {/* Connection lines */}
      <line x1="200" y1="100" x2="130" y2="240" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="400" y1="80" x2="370" y2="140" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="600" y1="90" x2="550" y2="150" stroke="#fff" strokeWidth="2" opacity="0.6"/>
    </svg>
  );

  const growthSvg = (
    <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0B1A3A"/>
      
      {/* Growth chart */}
      <rect x="100" y="350" width="20" height="50" fill="#FBBF24"/>
      <rect x="140" y="320" width="20" height="80" fill="#3B82F6"/>
      <rect x="180" y="280" width="20" height="120" fill="#10B981"/>
      <rect x="220" y="240" width="20" height="160" fill="#F87171"/>
      <rect x="260" y="200" width="20" height="200" fill="#FACC15"/>
      <rect x="300" y="160" width="20" height="240" fill="#8B5CF6"/>
      
      {/* Growth line */}
      <path d="M110 400 L150 370 L190 330 L230 290 L270 250 L310 210" 
            stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
      
      {/* Rocket for acceleration */}
      <path d="M500 300 L520 280 L540 300 L520 320 Z" fill="#F87171"/>
      <path d="M500 300 L480 320 L520 320 Z" fill="#FBBF24"/>
      <path d="M540 300 L560 320 L520 320 Z" fill="#FBBF24"/>
      
      {/* Speed lines */}
      <line x1="400" y1="200" x2="480" y2="280" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="420" y1="180" x2="500" y2="260" stroke="#fff" strokeWidth="2" opacity="0.7"/>
      <line x1="440" y1="160" x2="520" y2="240" stroke="#fff" strokeWidth="2" opacity="0.7"/>
    </svg>
  );

  const communitySvg = (
    <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0B1A3A"/>
      
      {/* People in community */}
      <circle cx="150" cy="300" r="40" fill="#FBBF24"/>
      <rect x="130" y="340" width="40" height="80" fill="#3B82F6"/>
      
      <circle cx="350" cy="220" r="40" fill="#F87171"/>
      <rect x="330" y="260" width="40" height="80" fill="#10B981"/>
      
      <circle cx="600" cy="280" r="40" fill="#FACC15"/>
      <rect x="580" y="320" width="40" height="80" fill="#6366F1"/>
      
      <circle cx="250" cy="150" r="35" fill="#8B5CF6"/>
      <rect x="235" y="185" width="30" height="70" fill="#F59E0B"/>
      
      <circle cx="500" cy="180" r="35" fill="#EC4899"/>
      <rect x="485" y="215" width="30" height="70" fill="#06B6D4"/>
      
      {/* Network connections */}
      <line x1="150" y1="300" x2="250" y2="150" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="250" y1="150" x2="350" y2="220" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="350" y1="220" x2="500" y2="180" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="500" y1="180" x2="600" y2="280" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      <line x1="150" y1="300" x2="600" y2="280" stroke="#fff" strokeWidth="2" opacity="0.6"/>
      
      {/* Community icons */}
      <circle cx="400" cy="100" r="10" fill="#fff"/>
      <circle cx="200" cy="80" r="10" fill="#fff"/>
      <circle cx="600" cy="120" r="10" fill="#fff"/>
      
      {/* Heart symbol for community */}
      <path d="M400 200 C400 180, 420 180, 420 200 C420 180, 440 180, 440 200 C440 220, 400 250, 400 250 C400 250, 360 220, 360 200 C360 180, 380 180, 380 200 C380 180, 400 180, 400 200 Z" 
            fill="#F87171" opacity="0.8"/>
    </svg>
  );

  const features = [
    {
      icon: <EmojiEventsOutlinedIcon />,
      title: 'Build Your Venture',
      description: 'Turn your idea into a thriving startup with our expert guidance and proven frameworks.',
      svgContent: ventureSvg
    },
    {
      icon: <DiamondOutlinedIcon />,
      title: 'Accelerate Growth',
      description: 'Join our incubator program for mentorship, funding opportunities & rapid scaling.',
      svgContent: growthSvg
    },
    {
      icon: <Groups2OutlinedIcon />,
      title: 'Join Our Community',
      description: 'Connect with like-minded founders and access resources for lifelong learning.',
      svgContent: communitySvg
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
              <SvgCard
                svgContent={feature.svgContent}
              />
            </FeatureCard>
          ))}
        </CardsContainer>
      </Container>
    </SectionContainer>
  );
};

export default NetworkSection;