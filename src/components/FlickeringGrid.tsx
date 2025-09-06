import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 8,
  flickerChance = 0.15,
  color = '#FFD700',
  maxOpacity = 0.3,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('FlickeringGrid: Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('FlickeringGrid: Canvas context not found');
      return;
    }

    console.log('FlickeringGrid: Starting animation');

    let squares: Array<{
      x: number;
      y: number;
      opacity: number;
      targetOpacity: number;
    }> = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
      
      // Regenerate squares
      squares = [];
      const cols = Math.ceil(rect.width / (squareSize + gridGap));
      const rows = Math.ceil(rect.height / (squareSize + gridGap));
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          squares.push({
            x: i * (squareSize + gridGap),
            y: j * (squareSize + gridGap),
            opacity: Math.random() * maxOpacity,
            targetOpacity: Math.random() * maxOpacity,
          });
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      squares.forEach((square) => {
        // Randomly change target opacity
        if (Math.random() < flickerChance) {
          square.targetOpacity = Math.random() * maxOpacity;
        }
        
        // Smooth transition to target opacity
        square.opacity += (square.targetOpacity - square.opacity) * 0.1;
        
        if (square.opacity > 0.01) {
          ctx.fillStyle = color;
          ctx.globalAlpha = square.opacity;
          ctx.fillRect(square.x, square.y, squareSize, squareSize);
        }
      });
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 215, 0, 0.05)', // Temporary background to see if it's rendering
      }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default FlickeringGrid;
