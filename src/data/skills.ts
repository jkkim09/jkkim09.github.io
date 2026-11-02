import type { IconItem, SkillGroup } from '../types/portfolio';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/js.png';
import vue from '../images/vue.png';
import react from '../images/react.png';
import flutter from '../images/flutter.png';
import spring from '../images/spring.png';
import mysql from '../images/mysql.png';
import docker from '../images/docker.png';
import kubernetes from '../images/k8s.png';
import aws from '../images/aws.png';
import bicycle from '../images/bicycle.png';
import weights from '../images/spo.png';
import movie from '../images/mov.png';
import swimming from '../images/swimming.png';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'FRONT END',
    items: [
      { id: 'html', label: 'HTML', image: html },
      { id: 'css', label: 'CSS', image: css },
      { id: 'javascript', label: 'JAVASCRIPT', image: javascript },
      { id: 'vue', label: 'VUEJS', image: vue },
      { id: 'react', label: 'REACT', image: react },
      { id: 'flutter', label: 'FLUTTER', image: flutter },
    ],
  },
  {
    id: 'backend',
    title: 'BACK END',
    items: [{ id: 'spring', label: 'Spring Boot', image: spring }],
  },
  {
    id: 'database',
    title: 'DATABASE',
    items: [{ id: 'mysql', label: 'MYSQL', image: mysql }],
  },
  {
    id: 'devops',
    title: 'DevOps',
    items: [
      { id: 'docker', label: 'DOCKER', image: docker },
      { id: 'kubernetes', label: 'K8S', image: kubernetes },
      { id: 'aws', label: 'AWS', image: aws },
    ],
  },
];

export const hobbies: IconItem[] = [
  { id: 'bicycle', label: '자전거', image: bicycle },
  { id: 'weights', label: '웨이트', image: weights },
  { id: 'movie', label: '영화', image: movie },
  { id: 'swimming', label: '수영', image: swimming },
];
