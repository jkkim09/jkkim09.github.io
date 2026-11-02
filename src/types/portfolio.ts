export interface Period {
  start: string;
  end: string;
}

export interface DatedEntry {
  id: string;
  period: Period;
}

export interface Project extends DatedEntry {
  title: string;
  subtitle: string;
  skills: string[];
  highlights: string[];
  details: string[];
  featured: boolean;
  tone: 'gold' | 'slate' | 'green' | 'rose' | 'blue';
}

export interface ResumeEntry extends DatedEntry {
  title: string;
  description: string[];
  note?: string;
}

export interface IconItem {
  id: string;
  label: string;
  image: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: IconItem[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay?: boolean;
}
