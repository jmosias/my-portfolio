export interface HeroData {
  name: string;
  role: string;
  taglines: string[];
  cta: string;
  navigation: {
    text: string;
    url: string;
  }[];
}

export interface CaseStudySection {
  heading: string;
  content: string[];
}

export interface WorkData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrls: string[];
  imageAlts: string[];
  caseStudy: CaseStudySection[];
}

export type Works = WorkData[];
