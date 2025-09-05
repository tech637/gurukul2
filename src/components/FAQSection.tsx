import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default
}));

const FAQTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 600
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[200]}`,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: `${theme.spacing(2)} 0`
  }
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  '& .MuiAccordionSummary-content': {
    margin: `${theme.spacing(1)} 0`
  },
  '&.Mui-expanded': {
    minHeight: 'auto'
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3, 3),
  paddingTop: 0
}));

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'What exactly happens on the diagnostic call?',
      answer: 'A 60-minute 1:1 on Zoom with Aditya. You leave with a scorecard, a single metric to move, a 14-day plan, and a sprint recommendation if it fits. Recording and PDF included.'
    },
    {
      id: 'panel2',
      question: 'What is included in the diagnostic call?',
      answer: 'The diagnostic call includes: 60-minute 1:1 session, personalized scorecard, action plan, sprint recommendation, session recording, PDF summary, and community access. Everything you need to get started.'
    },
    {
      id: 'panel3',
      question: 'Is this for idea-stage or post-launch?',
      answer: 'Both. We work with founders 0–12 months in. The plan is tailored to your current stage.'
    },
    {
      id: 'panel4',
      question: 'Do I need to be technical?',
      answer: 'No. We use no-code where it helps and guide dev where it\'s needed.'
    },
    {
      id: 'panel5',
      question: 'Can I skip the call and join a sprint?',
      answer: 'You can, but we don\'t recommend it. Most founders misdiagnose the real leak. The call protects your time and spend.'
    },
    {
      id: 'panel6',
      question: 'How much time should I budget each week?',
      answer: 'Expect 3–5 hours including sessions, implementation, and reviews.'
    },
    {
      id: 'panel7',
      question: 'What sectors do you work with?',
      answer: 'We are sector-agnostic. We\'ve coached founders working in D2C, Fintech, Manufacturing, Sustainability, FMCG, Platforms, Health, Travel, and more.'
    },
    {
      id: 'panel8',
      question: 'Is funding guaranteed?',
      answer: 'No. We help you become fundable: traction math, story, and a clean data room.'
    },
    {
      id: 'panel9',
      question: 'Will I get a certificate?',
      answer: 'Yes. You get a completion certificate. Although your outcomes will matter more and speak for themselves.'
    },
    {
      id: 'panel10',
      question: 'Who will coach me?',
      answer: 'Your primary coach will be Aditya Bajaj. When needed we bring sector specialists into your 1:1s. Their fees are included. Have a preferred mentor? Tell us and we will arrange it.'
    },
    {
      id: 'panel11',
      question: 'What if the call isn\'t useful?',
      answer: 'Email us within 24 hours. If you got zero value, we\'ll refund you.'
    },
    {
      id: 'panel12',
      question: 'Does the ₹499 get adjusted later?',
      answer: 'Yes. The fee is credited to any sprint you join within 14 days.'
    },
    {
      id: 'panel13',
      question: 'Are seats limited?',
      answer: 'Yes. We cap diagnostic slots weekly to keep the work deep and personal.'
    }
  ];

  return (
    <SectionContainer id="faq">
      <Container maxWidth="md">
        <FAQTitle variant="h4">
          FAQs
        </FAQTitle>
        
        <Stack spacing={2}>
          {faqs.map((faq) => (
            <StyledAccordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
            >
              <StyledAccordionSummary
                expandIcon={expanded === faq.id ? <CloseIcon /> : <ExpandMoreIcon />}
              >
                <Typography variant="h6" fontWeight={600}>
                  {faq.question}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default FAQSection;