export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  roleShort: string;
  responsibilities: string[];
  photoUrl?: string;
  initials: string;
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}
