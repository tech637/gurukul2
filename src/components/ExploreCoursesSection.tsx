import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const CenteredContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  background: `linear-gradient(135deg, #0B1A3A 0%, #1e3a8a 100%)`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(8, 4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(6, 3)
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(4, 2)
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  width: '100%'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  fontWeight: 800,
  color: '#ffffff',
  marginBottom: theme.spacing(6),
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '48px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));


const CourseCard = styled(Box)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isExpanded ? 'scale(1.02) translateY(-10px)' : 'scale(1)',
  boxShadow: isExpanded ? '0 20px 60px rgba(0, 0, 0, 0.25)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: isExpanded ? 'scale(1.02) translateY(-10px)' : 'translateY(-5px)',
    boxShadow: isExpanded ? '0 20px 60px rgba(0, 0, 0, 0.25)' : '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  textAlign: 'center'
}));

const CourseSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  fontStyle: 'italic'
}));

const CourseDescription = styled(Typography)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  fontSize: '14px',
  lineHeight: 1.6,
  color: theme.palette.text.primary,
  textAlign: 'left',
  maxHeight: isExpanded ? '200px' : '0',
  opacity: isExpanded ? 1 : 0,
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  marginTop: isExpanded ? theme.spacing(1) : 0,
  width: '100%'
}));

const CardHeader = styled(Box)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  transition: 'all 0.3s ease',
  transform: isExpanded ? 'translateY(-20px)' : 'translateY(0)'
}));

const LearnMoreButton = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: 'white',
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(3),
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(3),
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
  }
}));

const CloseButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: theme.palette.error.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    background: theme.palette.error.dark
  },
  '&::before': {
    content: '"×"'
  }
}));

const CoursesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  gap: theme.spacing(2)
  }
}));

const ExploreCoursesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Bespoke Coaching',
      subtitle: 'Evidence-led sprints from idea to scale.',
      description: 'Based on your stage and goals, we place you in the right sprint: Zero to One (Validation or Launch) or One to Ten (GTM Scale-Up or Fundraising). Each sprint is evidence-led and outcome-defined. Validate smarter, ship a lean MVP customers pay for, engineer a GTM engine toward ₹1 Cr run-rate, or craft an investor-credible story. We help you pull the right levers through...'
    },
    {
      id: 2,
      title: 'On Demand Services',
      subtitle: 'Fractional specialists that scale with you.',
      description: 'Plug in fractional experts for Tech, Growth, Finance, Legal, and Hiring so you execute like a bigger team without adding headcount. We help you ship faster, track the right metrics, lower CAC, and keep your ops investor-ready. From no-code builds and product oversight to campaign design, partnerships, MIS, and compliance. It\'s execution muscle on demand, tailored to...'
    },
    {
      id: 3,
      title: 'Support Group',
      subtitle: 'Smart builders make momentum contagious.',
      description: 'A curated room of serious builders where momentum compounds. Get weekly group Q&A and AMAs, peer reviews that sharpen decisions, warm introductions, and access to templates and playbooks that save time. This is where you stay accountable, pressure-test ideas, and move faster together.'
    }
  ];

  const handleCardClick = (courseId: number) => {
    setExpandedCard(expandedCard === courseId ? null : courseId);
  };

  return (
    <SectionContainer>
      <CenteredContent>
        <ContentWrapper>
          <SectionTitle>
            Explore Programs
          </SectionTitle>
          
          <CoursesGrid>
            {courses.map((course) => {
              const isExpanded = expandedCard === course.id;
              return (
                <CourseCard 
                  key={course.id} 
                  isExpanded={isExpanded}
                >
                  {isExpanded && (
                    <CloseButton onClick={() => handleCardClick(course.id)} />
                  )}
                  
                  <CardHeader isExpanded={isExpanded}>
                    <CourseTitle>
                      {course.title}
                    </CourseTitle>
                    <CourseSubtitle>
                      {course.subtitle}
                    </CourseSubtitle>
                    {!isExpanded && (
                      <LearnMoreButton onClick={() => handleCardClick(course.id)}>
                        Learn More
                      </LearnMoreButton>
                    )}
                  </CardHeader>
                  
                  <CourseDescription isExpanded={isExpanded}>
                    {course.description}
                  </CourseDescription>
                </CourseCard>
              );
            })}
          </CoursesGrid>
        </ContentWrapper>
      </CenteredContent>
    </SectionContainer>
  );
};

export default ExploreCoursesSection;