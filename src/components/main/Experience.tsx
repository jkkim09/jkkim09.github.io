import {
  A11y,
  EffectFlip,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Experience() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="flex min-h-svh flex-col items-center justify-center gap-10 px-2 py-16 sm:px-6"
    >
      <h2 id="projects-title" className="text-xl tracking-[0.2em] sm:text-3xl">
        EXPERIENCE
      </h2>
      <Swiper
        modules={[A11y, EffectFlip, Keyboard, Navigation, Pagination]}
        effect="flip"
        grabCursor
        autoHeight
        navigation
        pagination={{ clickable: true }}
        keyboard={{ onlyInViewport: true }}
        a11y={{
          prevSlideMessage: '이전 프로젝트',
          nextSlideMessage: '다음 프로젝트',
          paginationBulletMessage: '{{index}}번 프로젝트로 이동',
        }}
        className="experience-slider w-full max-w-2xl"
      >
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
