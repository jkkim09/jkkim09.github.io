import type { CalendarEvent } from '../types/portfolio';

export const events: CalendarEvent[] = [
  {
    id: 'kakaobank-2026',
    title: '카카오 뱅크',
    start: '2026-02-11',
    // FullCalendar excludes end: March 1 makes February 28 the final day.
    end: '2027-03-01',
    allDay: true,
  },
  {
    id: 'event-1',
    title: '프로젝트 진행중(Flutter, DevOps)',
    start: '2021-05-10',
    end: '2021-09-09',
  },
  {
    id: 'event-2',
    title: '프로젝트 미팅',
    start: '2021-06-01T01:30:00+00:00',
    end: '2021-06-01T11:30:00+00:00',
  },
  {
    id: 'event-3',
    title: '프로젝트 진행중(React)',
    start: '2021-09-10',
    end: '2021-12-30',
  },
  {
    id: 'event-4',
    title: '아모레퍼시픽 프로젝트 Front-End(React)',
    start: '2022-02-16',
    end: '2023-10-18',
  },
  {
    id: 'event-5',
    title: 'F&F 마케팅 BO Front-End (React)',
    start: '2023-10-25',
    end: '2023-11-15',
  },
  {
    id: 'event-6',
    title: 'LG EV충전기 관제시스템 Front-End 개발 및 리딩 (React)',
    start: '2023-11-28',
    end: '2024-05-27',
  },
];
