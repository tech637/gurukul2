import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const PillContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  background: 'linear-gradient(90deg, rgba(0,81,165,0.57) 20.67%, rgba(0,31,63,0.32) 90.87%)',
  borderRadius: '9999px',
  backdropFilter: 'blur(10px)',
  maxWidth: '400px',
  margin: '0 auto'
}));

const PillButton = styled(Button)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  borderRadius: '9999px',
  textTransform: 'capitalize',
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  padding: '8px 20px',
  minWidth: 'auto',
  color: isActive ? theme.palette.primary.main : theme.palette.common.white,
  backgroundColor: isActive ? theme.palette.common.white : 'transparent',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.grey[100] : 'rgba(255, 255, 255, 0.1)'
  }
}));

const NavigationPills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Ideation');
  const tabs = ['Ideation', 'Growth', 'Scale'];

  return (
    <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
      <PillContainer>
        {tabs.map((tab) => (
          <PillButton
            key={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </PillButton>
        ))}
      </PillContainer>
    </Box>
  );
};

export default NavigationPills;