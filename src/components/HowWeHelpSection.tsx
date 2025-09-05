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

const VideoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  height: '450px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#000',
  position: 'relative',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    height: '300px',
    maxWidth: '100%'
  }
}));

const VideoElement = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
});

const VideoPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  fontSize: '18px',
  fontWeight: 600,
  textAlign: 'center',
  padding: theme.spacing(4)
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
          
          <VideoContainer>
            {/* Replace with your actual video source */}
            <VideoElement
              controls
              poster="/assets/video-poster.jpg" // Add a poster image if you have one
            >
              <source src="/assets/demo-video.mp4" type="video/mp4" />
              <source src="/assets/demo-video.webm" type="video/webm" />
              {/* Fallback content */}
              <VideoPlaceholder>
                <Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    🎥 Demo Video Coming Soon
                  </Typography>
                  <Typography variant="body2">
                    Watch how we help founders turn ideas into fundable businesses
                  </Typography>
                </Box>
              </VideoPlaceholder>
            </VideoElement>
          </VideoContainer>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default HowWeHelpSection;