import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import FlickeringGrid from './components/FlickeringGrid';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NavigationPills from './components/NavigationPills';
import HowWeHelpSection from './components/HowWeHelpSection';
import NetworkSection from './components/NetworkSection';
import ExploreCoursesSection from './components/ExploreCoursesSection';
import SupportSection from './components/SupportSection';
import CoachSection from './components/CoachSection';
import FounderStoriesSection from './components/FounderStoriesSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const StartupGurukulApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <FlickeringGrid 
          squareSize={4}
          gridGap={12}
          flickerChance={0.2}
          color="#FFD700"
          maxOpacity={0.4}
        />
        <Box sx={{ position: 'relative', zIndex: 3 }}>
          <Navbar />
          <HeroSection />
          <NavigationPills />
          <HowWeHelpSection />
          <NetworkSection />
          <ExploreCoursesSection />
          <SupportSection />
          <CoachSection />
          <FounderStoriesSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default StartupGurukulApp;