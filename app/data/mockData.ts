import { ActivityRecord, Opportunity } from "../types";

export const STUDENT = {
  name: "Areen Momin",
  initials: "AM",
  program: "BS | PSYCHOLOGY | BS82 11361",
  department: "BS Psychology",
  institution: "Greenwich University",
};

export const STUDENT_STATS = {
  communityHours: 18,
  activitiesCompleted: 3,
  certificates: 2,
  recommendations: 1,
};

export const FEATURED_OPPORTUNITY_ID = 1;

export const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Psychology Community Outreach Volunteer",
    partner: "HOPE Foundation",
    hours: 20,
    location: "Karachi",
    skills: ["Communication", "Teamwork", "Empathy", "Facilitation"],
    certificate: true,
    category: "Health & Wellbeing",
    deadline: "Sep 15, 2026",
    description:
      "Join HOPE Foundation's community outreach programme and support mental health awareness sessions in underserved Karachi neighbourhoods. Working alongside licensed counsellors, you will facilitate group activities, assist in awareness presentations, and help connect community members to available mental health resources.",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: "Education Drive — Volunteer Tutor",
    partner: "Teach for Pakistan",
    hours: 15,
    location: "Karachi",
    skills: ["Teaching", "Communication"],
    certificate: true,
    category: "Education",
    deadline: "Sep 20, 2026",
    description: "Teach foundational English and Mathematics to underserved school students.",
    verified: true,
    featured: false,
  },
  {
    id: 3,
    title: "Food Drive Coordinator",
    partner: "Edhi Foundation",
    hours: 8,
    location: "Karachi",
    skills: ["Teamwork", "Coordination"],
    certificate: false,
    category: "Community Development",
    deadline: "Aug 30, 2026",
    description: "Coordinate food collection and distribution in local communities.",
    verified: true,
    featured: false,
  },
  {
    id: 4,
    title: "Youth Mentorship Programme",
    partner: "The Citizens Foundation",
    hours: 30,
    location: "Karachi",
    skills: ["Leadership", "Mentoring"],
    certificate: true,
    category: "Youth",
    deadline: "Oct 1, 2026",
    description: "Mentor high school students from disadvantaged communities on career pathways.",
    verified: true,
    featured: false,
  },
];

export const activities: ActivityRecord[] = [
  {
    id: 1,
    title: "Community Outreach",
    partner: "HOPE Foundation",
    hours: 8,
    date: "July 2026",
    verified: true,
    certificate: true,
    category: "Health & Wellbeing",
  },
  {
    id: 2,
    title: "Education Drive",
    partner: "Teach for Pakistan",
    hours: 6,
    date: "June 2026",
    verified: true,
    certificate: true,
    category: "Education",
  },
  {
    id: 3,
    title: "Food Drive",
    partner: "Edhi Foundation",
    hours: 4,
    date: "May 2026",
    verified: true,
    certificate: false,
    category: "Community Development",
  },
  {
    id: 4,
    title: "Psychology Community Outreach Volunteer",
    partner: "HOPE Foundation",
    hours: 0,
    date: "Aug 2026",
    verified: false,
    certificate: false,
    category: "Health & Wellbeing",
    pending: true,
  },
];

export const categoryColors: Record<string, string> = {
  "Health & Wellbeing": "#dcfce7",
  Education: "#dbeafe",
  "Community Development": "#fef3c7",
  Youth: "#ede9fe",
  Environment: "#dcfce7",
};

export const categoryTextColors: Record<string, string> = {
  "Health & Wellbeing": "#166534",
  Education: "#1e40af",
  "Community Development": "#92400e",
  Youth: "#5b21b6",
  Environment: "#166534",
};

export function getOpportunityById(id: number, extras: Opportunity[] = []): Opportunity | undefined {
  return [...extras, ...opportunities].find((o) => o.id === id);
}

export function getFeaturedOpportunity(extras: Opportunity[] = []): Opportunity {
  return getOpportunityById(FEATURED_OPPORTUNITY_ID, extras) ?? opportunities[0];
}
