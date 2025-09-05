import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(4)
}));

const HighlightText = styled('span')(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary
}));

const FundableText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600
}));

const HowWeHelpSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Typography variant="h3" color="text.primary">
            How we help?
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ maxWidth: '800px' }}
          >
            Our mission is to <HighlightText>de-risk</HighlightText> the founder journey by providing the frameworks
            to turn promising ideas into <FundableText>fundable</FundableText> businesses.
          </Typography>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default HowWeHelpSection;