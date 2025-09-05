import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, 
    #001F3F 0%,
    rgba(0, 31, 63, 0.95) 25%,
    rgba(0, 31, 63, 0.85) 50%,
    rgba(0, 31, 63, 0.95) 75%,
    #001F3F 100%
  )`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(120, 163, 206, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(120, 163, 206, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: 'none'
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: '900px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 3)
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  color: '#FFFFFF',
  fontFamily: 'serif',
  fontWeight: 700,
  fontSize: 'clamp(32px, 6vw, 48px)',
  lineHeight: 'clamp(40px, 7vw, 56px)',
  letterSpacing: '-0.02em',
  animation: `${fadeInUp} 0.8s ease-out`,
  textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(90deg, 
      transparent 0%, 
      #78A3CE 50%, 
      transparent 100%
    )`,
    borderRadius: '2px'
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}));

const PillContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '60px',
  padding: '8px',
  boxShadow: `
    0 12px 40px rgba(0, 31, 63, 0.25),
    0 6px 20px rgba(0, 31, 63, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
  border: '2px solid rgba(0, 31, 63, 0.2)',
  marginBottom: theme.spacing(6),
  overflow: 'hidden',
  animation: `${fadeInUp} 0.8s ease-out 0.2s both`,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
    borderRadius: '50px',
    padding: '6px'
  }
}));

const ActiveIndicator = styled(Box)<{ activeIndex: number }>(({ theme, activeIndex }) => ({
  position: 'absolute',
  top: '8px',
  left: '8px',
  width: 'calc(33.333% - 5.33px)',
  height: 'calc(100% - 16px)',
  background: `linear-gradient(135deg, 
    #001F3F 0%, 
    rgba(0, 31, 63, 0.9) 50%,
    #001F3F 100%
  )`,
  borderRadius: '52px',
  boxShadow: `
    0 6px 24px rgba(0, 31, 63, 0.4),
    0 3px 12px rgba(0, 31, 63, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2)
  `,
  transform: `translateX(${activeIndex * 100}%)`,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, 
      transparent 0%, 
      rgba(120, 163, 206, 0.3) 50%, 
      transparent 100%
    )`,
    borderRadius: '52px',
    animation: `${shimmer} 2s ease-in-out infinite`
  }
}));

const PillButton = styled(Button)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  position: 'relative',
  zIndex: 2,
  flex: 1,
  borderRadius: '52px',
  textTransform: 'none',
  fontFamily: 'Inter, Roboto, sans-serif',
  fontSize: 'clamp(16px, 2.5vw, 18px)',
  fontWeight: isActive ? 700 : 600,
  padding: theme.spacing(2, 3),
  minWidth: 'auto',
  color: isActive ? '#FFFFFF' : '#001F3F',
  backgroundColor: 'transparent',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  letterSpacing: '0.5px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: isActive ? '#FFFFFF' : '#001F3F',
    transform: 'translateY(-2px)',
    '&::before': {
      opacity: 0.15
    }
  },
  '&:active': {
    transform: 'scale(0.98)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      #001F3F 0%, 
      rgba(0, 31, 63, 0.8) 100%
    )`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
    borderRadius: '52px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 2),
    fontSize: '16px'
  }
}));

const TabContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6, 4),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.9) 100%
  )`,
  borderRadius: theme.spacing(4),
  backdropFilter: 'blur(20px)',
  border: `2px solid rgba(0, 31, 63, 0.15)`,
  boxShadow: `
    0 16px 48px rgba(0, 31, 63, 0.2),
    0 8px 24px rgba(0, 31, 63, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9)
  `,
  animation: `${slideIn} 0.8s ease-out 0.4s both`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, 
      #001F3F 0%, 
      #78A3CE 50%, 
      #001F3F 100%
    )`,
    animation: `${shimmer} 3s ease-in-out infinite`
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 3)
  }
}));

const TabIcon = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(32px, 5vw, 48px)',
  marginBottom: theme.spacing(3),
  animation: `${pulse} 2.5s ease-in-out infinite`,
  filter: 'drop-shadow(0 6px 12px rgba(0, 31, 63, 0.3))',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    background: `radial-gradient(circle, 
      rgba(0, 31, 63, 0.1) 0%, 
      transparent 70%
    )`,
    borderRadius: '50%',
    zIndex: -1,
    animation: `${float} 3s ease-in-out infinite`
  }
}));

const TabTitle = styled(Typography)(({ theme }) => ({
  color: '#001F3F',
  fontFamily: 'serif',
  fontWeight: 700,
  fontSize: 'clamp(24px, 4vw, 36px)',
  lineHeight: 'clamp(32px, 5vw, 44px)',
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.01em',
  textShadow: '0 2px 8px rgba(0, 31, 63, 0.1)'
}));

const TabDescription = styled(Typography)(({ theme }) => ({
  color: '#001F3F',
  fontFamily: 'Inter, Roboto, sans-serif',
  fontSize: 'clamp(16px, 2.5vw, 18px)',
  lineHeight: 'clamp(24px, 3vw, 26px)',
  fontWeight: 400,
  maxWidth: '600px',
  margin: '0 auto',
  opacity: 0.8
}));

const TabFeatures = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2)
  }
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  background: `linear-gradient(135deg, 
    rgba(0, 31, 63, 0.08) 0%, 
    rgba(0, 31, 63, 0.05) 50%,
    rgba(120, 163, 206, 0.08) 100%
  )`,
  borderRadius: theme.spacing(3),
  border: `2px solid rgba(0, 31, 63, 0.1)`,
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(0, 31, 63, 0.12) 0%, 
      rgba(0, 31, 63, 0.08) 50%,
      rgba(120, 163, 206, 0.12) 100%
    )`,
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 32px rgba(0, 31, 63, 0.2)',
    borderColor: 'rgba(0, 31, 63, 0.2)',
    '&::before': {
      opacity: 1
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, 
      #001F3F 0%, 
      #78A3CE 100%
    )`,
    opacity: 0,
    transition: 'opacity 0.3s ease'
  }
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter, Roboto, sans-serif',
  fontWeight: 600,
  color: '#001F3F',
  fontSize: '16px',
  letterSpacing: '0.3px'
}));

const FloatingElements = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const FloatingShape = styled(Box)<{ top: string; left: string; delay: string; size: string }>(({ theme, top, left, delay, size }) => ({
  position: 'absolute',
  top,
  left,
  width: size,
  height: size,
  borderRadius: '50%',
  background: `radial-gradient(circle, 
    rgba(0, 31, 63, 0.1) 0%, 
    transparent 70%
  )`,
  animation: `${float} 6s ease-in-out infinite ${delay}`
}));

const NavigationPills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Ideation');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const tabs = [
    { 
      id: 'Ideation', 
      label: 'Ideation', 
      icon: '💡',
      title: 'Ideation',
      description: 'Validate your idea and build the foundation for your startup journey with proven frameworks and expert guidance',
      features: ['Market Research', 'Idea Validation', 'MVP Development', 'User Testing']
    },
    { 
      id: 'Growth', 
      label: 'Growth', 
      icon: '📈',
      title: 'Growth',
      description: 'Scale your business and acquire customers through proven strategies and data-driven approaches',
      features: ['Customer Acquisition', 'Marketing Strategy', 'Sales Optimization', 'Team Building']
    },
    { 
      id: 'Scale', 
      label: 'Scale', 
      icon: '🚀',
      title: 'Scale',
      description: 'Expand globally and optimize operations for sustainable growth and market leadership',
      features: ['Global Expansion', 'Process Optimization', 'Technology Scaling', 'Strategic Partnerships']
    }
  ];

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <SectionContainer>
      <FloatingElements>
        <FloatingShape top="10%" left="10%" delay="0s" size="60px" />
        <FloatingShape top="20%" left="85%" delay="2s" size="40px" />
        <FloatingShape top="70%" left="5%" delay="4s" size="50px" />
        <FloatingShape top="60%" left="90%" delay="1s" size="35px" />
      </FloatingElements>

      <ContentWrapper>
        <SectionTitle>
          Choose Your Startup Journey Stage
        </SectionTitle>
        
        <PillContainer>
          <ActiveIndicator activeIndex={activeIndex} />
          {tabs.map((tab) => (
            <PillButton
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </PillButton>
          ))}
        </PillContainer>

        {activeTabData && (
          <TabContent>
            <TabIcon>
              {activeTabData.icon}
            </TabIcon>
            <TabTitle>
              {activeTabData.title}
            </TabTitle>
            <TabDescription>
              {activeTabData.description}
            </TabDescription>
            
            <TabFeatures>
              {activeTabData.features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  sx={{ 
                    animation: `${slideIn} 0.6s ease-out ${0.6 + index * 0.1}s both` 
                  }}
                >
                  <FeatureText>
                    {feature}
                  </FeatureText>
                </FeatureItem>
              ))}
            </TabFeatures>
          </TabContent>
        )}
      </ContentWrapper>
    </SectionContainer>
  );
};

export default NavigationPills;