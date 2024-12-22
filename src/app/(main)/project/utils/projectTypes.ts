export interface Feature {
  feature: string;
  description: string;
}

export interface TechTag {
  id: number;
  name: string;
}

export interface ProjectData {
  title: string;
  note: string;
  description: string;
  techTags: TechTag[];
  demoLink: string;
  repoLink: string;
  images?: string[];
  features?: Feature[];
}