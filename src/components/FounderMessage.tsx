import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const MessageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  flex: 1
}));

const MessageParagraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.8,
  fontSize: '1.1rem',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '1rem'
  }
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.8,
  fontSize: '1.1rem',
  fontWeight: 600,
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '1rem'
  }
}));

interface FounderMessageProps {
  messages: string[];
  highlightMessage?: string;
}

const FounderMessage: React.FC<FounderMessageProps> = ({
  messages,
  highlightMessage
}) => {
  return (
    <MessageContainer>
      <Stack spacing={3}>
        {messages.map((message, index) => (
          <MessageParagraph key={index} variant="body1">
            {message}
          </MessageParagraph>
        ))}
        {highlightMessage && (
          <HighlightText variant="body1">
            {highlightMessage}
          </HighlightText>
        )}
      </Stack>
    </MessageContainer>
  );
};

export default FounderMessage;