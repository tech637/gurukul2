import React from 'react';
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from './icons/StarIcon';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: theme.spacing(8, 0),
  position: 'relative',
  color: theme.palette.common.white
}));

const ContentWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  alignItems: 'flex-start',
  gap: theme.spacing(3)
}));

const NewsletterTitle = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.common.white} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 800,
  fontSize: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px'
  }
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '16px',
  fontWeight: 400
}));

const SubscriptionForm = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  minWidth: '350px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%'
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.common.white,
    borderRadius: '12px',
    '& fieldset': {
      borderColor: 'transparent'
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
      borderWidth: '2px'
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(1.5, 2),
    fontSize: '16px'
  }
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5, 4),
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '16px',
  minWidth: '140px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(254, 185, 0, 0.3)'
  },
  transition: 'all 0.3s ease'
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(4),
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  textAlign: 'center'
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '14px'
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <NewsletterTitle>
            <StarIcon width={40} height={40} color="#FEB900" />
            <GradientTitle>
              Cool stuff only
            </GradientTitle>
          </NewsletterTitle>
          
          <SubtitleText>
            Subscribe to our newsletter for startup insights, founder stories, and exclusive content
          </SubtitleText>
          
          <SubscriptionForm>
            <StyledTextField
              placeholder="Enter your email address"
              variant="outlined"
              fullWidth
            />
            <SubscribeButton>
              Subscribe
            </SubscribeButton>
          </SubscriptionForm>
          
          <FooterBottom>
            <CopyrightText>
              © 2024 Startup Gurukul by Acharya Ventures. All rights reserved.
            </CopyrightText>
          </FooterBottom>
        </ContentWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;