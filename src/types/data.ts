export type IconName =
  | "GithubIcon"
  | "LinkedinIcon"
  | "DownloadIcon"
  | "DownIcon"
  | "CloseIcon"
  | "CopyIcon"
  | "PopModalIcon"
  | "CheckIcon";

export interface InfoData {
  name: string;
  role: string;
  email: string;
  socials: { name: string; url: string; icon: IconName }[];
  images: { url: string; alt: string; name: string }[];
  resume: { url: string; cta: string; icon: IconName };
  about: string[];
}

export interface HeroData {
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
