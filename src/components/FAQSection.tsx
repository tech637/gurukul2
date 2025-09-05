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
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'What exactly happens on the call?',
      answer: 'We map your funnel, isolate the biggest bottleneck, and design a 14-day plan with owners and metrics. You get a clear action plan you can start running within 24 hours.'
    },
    {
      id: 'panel2',
      question: 'What for idea stage or post-launch?',
      answer: 'Our program is designed to support founders at every stage of their journey, from ideation to scaling. We provide tailored guidance based on where you are in your startup journey.'
    },
    {
      id: 'panel3',
      question: 'Do I need prepare anything',
      answer: 'Just come with an open mind and be ready to share your current challenges. We\'ll guide you through everything else during our session.'
    },
    {
      id: 'panel4',
      question: 'How many slots an you open?',
      answer: 'We maintain limited slots to ensure quality mentorship. Currently, we open new cohorts quarterly with 20-25 founders per batch.'
    },
    {
      id: 'panel5',
      question: 'What is is cost for the diagnostic call?',
      answer: 'The initial diagnostic call is complimentary for qualified founders. This helps us understand your needs and determine if our program is the right fit.'
    }
  ];

  return (
    <SectionContainer>
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