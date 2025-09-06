import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from './icons/StarIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from './Logo';

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

const SocialTitle = styled(Stack)(({ theme }) => ({
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

const SocialMediaContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.common.white,
  width: '56px',
  height: '56px',
  border: `2px solid rgba(255, 255, 255, 0.2)`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(254, 185, 0, 0.3)',
    borderColor: theme.palette.secondary.main
  }
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
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/company/acharya-ventures',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      url: 'https://twitter.com/acharyaventures',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://instagram.com/acharyaventures',
      color: '#E4405F'
    },
    {
      name: 'YouTube',
      icon: <YouTubeIcon />,
      url: 'https://youtube.com/@acharyaventures',
      color: '#FF0000'
    }
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              '& .MuiTypography-root': {
                color: '#FFFFFF !important'
              }
            }}>
              <Logo />
            </Box>
            <SocialTitle>
              <StarIcon width={40} height={40} color="#FEB900" />
              <GradientTitle>
                Connect With Us
              </GradientTitle>
            </SocialTitle>
          </Box>
          
          <SubtitleText>
            Follow us for startup insights, founder stories, and exclusive content
          </SubtitleText>
          
          <SocialMediaContainer>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
              >
                <SocialIconButton
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </SocialIconButton>
              </Link>
            ))}
          </SocialMediaContainer>
          
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