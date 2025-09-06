import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const rippleExpand = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
`;

const ripplePulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.6;
  }
`;

const rippleFloat = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-20px);
  }
`;

const RippleContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 2
}));

const RippleCircle = styled(Box)<{ 
  size: number; 
  opacity: number; 
  delay: number;
  x: number;
  y: number;
  animationType: 'expand' | 'pulse' | 'float';
  color: string;
}>(({ size, opacity, delay, x, y, animationType, color }) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'pulse': return `${ripplePulse} 4s ease-in-out infinite`;
      case 'float': return `${rippleFloat} 6s ease-in-out infinite`;
      default: return `${rippleExpand} 3s ease-out infinite`;
    }
  };

  return {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    border: `1px solid ${color}`,
    transform: 'translate(-50%, -50%)',
    animation: getAnimation(),
    animationDelay: `${delay}s`,
    opacity: opacity,
    filter: 'blur(1px)'
  };
});

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const Ripple: React.FC<RippleProps> = ({ 
  mainCircleSize = 210, 
  mainCircleOpacity = 0.24, 
  numCircles = 8 
}) => {
  const circles = Array.from({ length: numCircles }, (_, index) => {
    const size = mainCircleSize + (index * 20);
    const opacity = mainCircleOpacity * (1 - index / numCircles);
    const delay = index * 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    return {
      size,
      opacity,
      delay,
      x,
      y
    };
  });

  return (
    <RippleContainer>
      {circles.map((circle, index) => (
        <RippleCircle
          key={index}
          size={circle.size}
          opacity={circle.opacity}
          delay={circle.delay}
          x={circle.x}
          y={circle.y}
        />
      ))}
    </RippleContainer>
  );
};

export default Ripple;
