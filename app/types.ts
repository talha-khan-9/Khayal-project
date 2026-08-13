export type Screen =
  | 'portal'
  | 'khayal-dashboard'
  | 'opportunity-detail'
  | 'application-submitted'
  | 'community-record'
  | 'admin-dashboard'
  | 'create-opportunity'
  | 'corporate-csr';

export interface Opportunity {
  id: number;
  title: string;
  partner: string;
  hours: number;
  location: string;
  skills: string[];
  certificate: boolean;
  category: string;
  deadline: string;
  description: string;
  verified: boolean;
  featured?: boolean;
}

export interface ActivityRecord {
  id: number;
  title: string;
  partner: string;
  hours: number;
  date: string;
  verified: boolean;
  certificate: boolean;
  category: string;
  pending?: boolean;
}
