import React from 'react';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  borderRadius: theme.spacing(2),
  border: `2px solid ${theme.palette.grey[200]}`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
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

const CardImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  display: 'block'
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

interface NetworkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  imageUrl: string;
  imageAlt: string;
}

const NetworkCard: React.FC<NetworkCardProps> = ({
  icon,
  title,
  description,
  action,
  imageUrl,
  imageAlt
}) => {
  return (
    <FeatureCard>
      <CardHeader>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <Typography variant="h6" fontWeight={700} color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
        <ActionButton>
          {action}
        </ActionButton>
      </CardHeader>
      <CardImage 
        src={imageUrl}
        alt={imageAlt}
        loading="lazy"
      />
    </FeatureCard>
  );
};

export default NetworkCard;