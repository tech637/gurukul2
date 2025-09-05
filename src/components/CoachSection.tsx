import React from 'react';
import { Box, Typography, Container, Card, CardContent, Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.background.default,
  position: 'relative'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 500
}));

const CoachCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  border: `2px solid ${theme.palette.primary.main}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -8,
    left: -8,
    width: 16,
    height: 16,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -8,
    right: -8,
    width: 16,
    height: 16,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px'
  }
}));

const CoachCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'flex-start',
  padding: 0,
  '&:last-child': {
    paddingBottom: 0
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const CoachAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  border: `4px solid ${theme.palette.primary.light}`,
  boxShadow: '0 4px 20px rgba(0, 81, 165, 0.2)',
  [theme.breakpoints.down('md')]: {
    width: 150,
    height: 150
  }
}));

const CoachInfo = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: theme.spacing(2.5)
}));

const CoachName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1)
}));

const CoachDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.7,
  color: theme.palette.text.primary,
  fontSize: '16px'
}));

const BottomAccents = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -8,
  left: -8,
  width: 16,
  height: 16,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '2px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: -24,
    width: 16,
    height: 16,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
    transform: 'translateX(calc(800px - 32px))'
  }
}));

const CoachSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h4">
          About Your Coach
        </SectionTitle>
        
        <CoachCard>
          <CoachCardContent>
            <CoachAvatar 
              src="https://i.pravatar.cc/180?img=12"
              alt="Aditya Bajaj - Startup Coach"
            />
            
            <CoachInfo>
              <CoachName variant="h5">
                Aditya Bajaj
              </CoachName>
              
              <CoachDescription>
                Aditya has built, scaled, and exited multiple ventures across D2C, Tech Platforms and Services.
              </CoachDescription>
              
              <CoachDescription>
                He teaches entrepreneurship at IE Business School, Spain and has mentored over 200 founders who have collectively raised more than ₹50 Cr.
              </CoachDescription>
              
              <CoachDescription>
                His approach is structured, scientific, and relentlessly practical.
              </CoachDescription>
            </CoachInfo>
          </CoachCardContent>
          
          <BottomAccents />
        </CoachCard>
      </Container>
    </SectionContainer>
  );
};

export default CoachSection;