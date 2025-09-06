import React from 'react';
import { Box, Typography, Container, Chip, Fade, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SupportIcon from '@mui/icons-material/Support';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #F8FAFC 100%)`,
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12, 0)
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: theme.spacing(2),
  letterSpacing: '-0.01em',
  animation: `${slideInLeft} 0.8s ease-out`
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: '100%',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  animation: `${slideInRight} 0.8s ease-out 0.2s both`,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '600px'
  }
}));

const ProgramsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: theme.spacing(4),
    alignItems: 'stretch'
  }
}));

const ProgramCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
    '& .program-icon': {
      transform: 'scale(1.05) rotate(3deg)'
    }
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4)
  }
}));

const ProgramIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& svg': {
    fontSize: '28px',
    color: theme.palette.common.white
  },
  [theme.breakpoints.up('sm')]: {
    width: '70px',
    height: '70px',
    '& svg': {
      fontSize: '32px'
    }
  }
}));

const ProgramTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  letterSpacing: '-0.01em'
}));

const ProgramSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  fontStyle: 'italic',
  fontWeight: 500
}));

const ProgramDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2)
}));

const ProgramFeatures = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: theme.spacing(1),
  marginTop: 'auto',
  paddingTop: theme.spacing(1),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap'
  }
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '11px',
  height: '24px',
  transition: 'all 0.3s ease',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 2px 8px rgba(0, 81, 165, 0.3)'
  },
  '& .MuiChip-label': {
    padding: '0 6px',
    whiteSpace: 'nowrap'
  }
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
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  opacity: 0.1,
  animation: `${float} 6s ease-in-out infinite ${delay}`
}));

const ExploreCoursesSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const programs = [
    {
      id: 1,
      title: 'Bespoke Coaching',
      subtitle: 'Evidence-led sprints from idea to scale',
      description: 'Based on your stage and goals, we place you in the right sprint: Zero to One (Validation or Launch) or One to Ten (GTM Scale-Up or Fundraising). Each sprint is evidence-led and outcome-defined.',
      features: ['1:1 Mentorship', 'Outcome Focused', 'Evidence-Based'],
      icon: <TrendingUpIcon />,
      iconBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      id: 2,
      title: 'On Demand Services',
      subtitle: 'Fractional specialists that scale with you',
      description: 'Plug in fractional experts for Tech, Growth, Finance, Legal, and Hiring so you execute like a bigger team without adding headcount. We help you ship faster, track the right metrics, lower CAC.',
      features: ['Tech Experts', 'Growth Specialists', 'Finance Pros'],
      icon: <SupportIcon />,
      iconBg: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'
    },
    {
      id: 3,
      title: 'Support Group',
      subtitle: 'Smart builders make momentum contagious',
      description: 'A curated room of serious builders where momentum compounds. Get weekly group Q&A and AMAs, peer reviews that sharpen decisions, warm introductions, and access to templates and playbooks.',
      features: ['Peer Network', 'Weekly AMAs', 'Templates'],
      icon: <GroupIcon />,
      iconBg: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    }
  ];

  return (
    <SectionContainer id="programs">
      <FloatingElements>
        <FloatingShape top="10%" left="10%" delay="0s" size="40px" />
        <FloatingShape top="20%" left="85%" delay="2s" size="30px" />
        <FloatingShape top="70%" left="5%" delay="4s" size="50px" />
        <FloatingShape top="60%" left="90%" delay="1s" size="35px" />
      </FloatingElements>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <ContentWrapper>
          <SectionTitle variant="h2">
            Explore Sprint
          </SectionTitle>
          
          <SectionSubtitle variant="h5">
            Choose the perfect Sprint to accelerate your startup journey
          </SectionSubtitle>
          
          <ProgramsGrid>
            {programs.map((program, index) => (
              <Fade in={true} timeout={800 + index * 200} key={program.id}>
                <ProgramCard>
                  <ProgramIcon 
                    className="program-icon"
                    sx={{ background: program.iconBg }}
                  >
                    {program.icon}
                  </ProgramIcon>
                  
                  <ProgramTitle variant="h4">
                    {program.title}
                  </ProgramTitle>
                  
                  <ProgramSubtitle variant="h6">
                    {program.subtitle}
                  </ProgramSubtitle>
                  
                  <ProgramDescription variant="body1">
                    {program.description}
                  </ProgramDescription>
                  
                  <ProgramFeatures>
                    {program.features.map((feature, idx) => (
                      <FeatureChip key={idx} label={feature} size="small" />
                    ))}
                  </ProgramFeatures>
                </ProgramCard>
              </Fade>
            ))}
          </ProgramsGrid>
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default ExploreCoursesSection;