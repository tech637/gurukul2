/**
 * Type definitions for Founder Stories section
 */

export interface FounderStory {
  id: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  icon: 'trophy' | 'star' | 'diamond';
}

export interface FounderStoriesProps {
  stories?: FounderStory[];
}