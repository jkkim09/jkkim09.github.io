import type { ResumeEntry } from '../types/portfolio';

export const education: ResumeEntry[] = [
  {
    id: 'education-1',
    period: {
      start: '2016.07',
      end: '2017.01',
    },
    title: 'KOSTA 개발자 과정 이수',
    description: [],
    note: '최우수상 수상',
  },
  {
    id: 'education-2',
    period: {
      start: '2009.03',
      end: '2015.03',
    },
    title: '대학교 학사 졸업',
    description: [],
    note: '3.93/4.5',
  },
  {
    id: 'education-3',
    period: {
      start: '2006.03',
      end: '2009.03',
    },
    title: '고등학교 졸업',
    description: [],
  },
];

export const employment: ResumeEntry[] = [
  {
    id: 'employment-1',
    period: {
      start: '2021.05',
      end: '현재',
    },
    title: '프리랜서 프로젝트 참여',
    description: ['아모레 퍼시픽, 카카오뱅크 외 다수 프로젝트 참여'],
    note: '프리랜서',
  },
  {
    id: 'employment-2',
    period: {
      start: '2020.11',
      end: '2021.03',
    },
    title: '브랜드엑스코퍼레이션 개발자 업무',
    description: ['운동 관련 서비스 Web Service. Admin 개발'],
  },
  {
    id: 'employment-3',
    period: {
      start: '2018.09',
      end: '2020.11',
    },
    title: '카테노이드 개발자 업무',
    description: [
      'Video Html Player 개발',
      '채팅 Web서비스 개발',
      '영상 업데이트 클라이언트 개발',
      '영상 업로드 api서버 개발',
    ],
  },
  {
    id: 'employment-4',
    period: {
      start: '2017.02',
      end: '2018.09',
    },
    title: '티비허브 개발자 업무',
    description: ['카드사, 기타 포인트 통합 Web서비스 개발'],
  },
];
