import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3)
}));

const FounderImage = styled('img')(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  objectFit: 'cover',
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0 8px 32px rgba(0, 81, 165, 0.2)'
}));

const FounderName = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontSize: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem'
  }
}));

interface FounderProfileProps {
  name: string;
  imageUrl: string;
  imageAlt: string;
}

const FounderProfile: React.FC<FounderProfileProps> = ({
  name,
  imageUrl,
  imageAlt
}) => {
  return (
    <ProfileContainer>
      <FounderImage 
        src={imageUrl}
        alt={imageAlt}
        loading="lazy"
      />
      <FounderName variant="h3">
        {name}
      </FounderName>
    </ProfileContainer>
  );
};

export default FounderProfile;