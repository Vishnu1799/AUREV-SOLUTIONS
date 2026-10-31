export type ProjectStatus =
  | "Commercially Delivered"
  | "Developed"
  | "Working Prototype"
  | "In Development"
  | "Design / Demonstration"
  | "Concept"
  | "Internal Review";

export type ProjectCategory =
  | "Financial Technology"
  | "Business Management"
  | "Educational Technology"
  | "E-commerce / Grocery"
  | "Agentic AI / FinTech"
  | "Personal AI / Automation"
  | "Hardware & Sustainable Innovation"
  | "IoT & Smart Infrastructure"
  | "Cultural Technology";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  isPublic: boolean; // false for Internal Review / Unconfirmed
  tagline: string;
  summary: string;
  problem: string;
  objectives: string[];
  implementedFeatures: string[];
  plannedFeatures?: string[];
  techStack?: string[];
  commercialDetails?: {
    deliveredFor: string;
    saleValue: string;
    invoiceNumber: string;
    invoiceDate: string;
  };
  eventDetails?: {
    eventName: string;
    location: string;
    dates: string;
    teamMembers?: string[];
    role?: string;
  };
  keyTakeaway?: string;
  relatedSlugs: string[];
}
