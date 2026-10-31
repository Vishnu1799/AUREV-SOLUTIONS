export type ProductAvailability =
  | "Delivered Solution"
  | "Functional Prototype"
  | "In Active Development"
  | "Concept & Architecture";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Business & Financial" | "AI-Powered Systems" | "Digital Platforms";
  tagline: string;
  intendedUsers: string;
  problemSolved: string;
  confirmedCapabilities: string[];
  plannedCapabilities?: string[];
  availability: ProductAvailability;
  projectSlug: string;
}
