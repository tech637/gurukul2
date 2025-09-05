import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const MockupContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const MockupImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '600px',
  objectFit: 'contain',
  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))'
}));

const DeviceMockup: React.FC = () => {
  return (
    <MockupContainer>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <MockupImage 
          src="/assets/ipad-mockup.png" 
          alt="iPad mockup showing the platform interface"
        />
      </Container>
    </MockupContainer>
  );
};

export default DeviceMockup;