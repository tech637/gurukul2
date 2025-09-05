import React from 'react';
import { Box, Typography, Container, Button, Stack, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  textAlign: 'center'
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(4)
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  maxWidth: '800px',
  lineHeight: 1.2,
  fontWeight: 600
}));

const Tagline = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  opacity: 0.9,
  marginBottom: theme.spacing(2)
}));

const StatsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2)
  }
}));

const StatItem = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  opacity: 0.9
}));

const RatingContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(1)
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.common.white,
  padding: theme.spacing(2, 4),
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[500]
  }
}));

const CTASection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <MainHeading variant="h3">
            Build the company you promised yourself
          </MainHeading>
          
          <Tagline>
            Clarity now. Momentum next. Confidence always.
          </Tagline>
          
          <StatsContainer>
            <StatItem>200+ founders mentored</StatItem>
            <Box sx={{ color: 'white', opacity: 0.5 }}>•</Box>
            <StatItem>₹50+ Cr raised by alumni</StatItem>
            <Box sx={{ color: 'white', opacity: 0.5 }}>•</Box>
            <RatingContainer>
              <Rating value={5} readOnly size="small" />
              <StatItem>4.9/5 Program Rating</StatItem>
            </RatingContainer>
          </StatsContainer>
          
          <CTAButton size="large">
            Book Your Diagnostic Call
          </CTAButton>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default CTASection;