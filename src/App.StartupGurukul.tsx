import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
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
    </ThemeProvider>
  );
};

export default StartupGurukulApp;