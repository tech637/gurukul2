import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '48px',
  height: '48px',
  objectFit: 'contain',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px'
  }
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(18px, 4vw, 24px)',
  fontWeight: 900,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.01em',
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(16px, 4vw, 20px)'
  }
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(10px, 2vw, 12px)',
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginTop: '-2px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(9px, 2vw, 11px)'
  }
}));

const LogoTextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  lineHeight: 1
}));

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <LogoContainer onClick={onClick}>
      <LogoImage 
        src="/Logo.png" 
        alt="Startup Gurukul Logo"
        onError={(e) => {
          // Fallback to text logo if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div style="
                width: 48px; 
                height: 48px; 
                border-radius: 50%; 
                background: linear-gradient(135deg, #0051A5 0%, #FEB900 100%); 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                color: white; 
                font-weight: 900; 
                font-size: 20px;
                box-shadow: 0 4px 12px rgba(0, 81, 165, 0.3);
              ">
                A
              </div>
            `;
          }
        }}
      />
      <LogoTextContainer>
        <LogoText>
          Startup Gurukul
        </LogoText>
        <CompanyName>
          by Acharya Ventures
        </CompanyName>
      </LogoTextContainer>
    </LogoContainer>
  );
};

export default Logo;