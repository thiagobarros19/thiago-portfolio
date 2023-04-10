export enum ExpertiseType {
  BASIC = 'BASIC',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT',
}

export interface Technology {
  logoUrl: string;
  title: string;
  expertise: ExpertiseType;
  age: number;
}

export interface Social {
  logoUrl: string;
  socialUrl: string;
  title: string;
}

export interface Experience {
  logoUrl: string;
  companyName: string;
  experienceJobs: ExperienceJob[];
}

export interface ExperienceJob {
  startDate: string;
  endDate: string;
  role: string;
  description: string;
}
