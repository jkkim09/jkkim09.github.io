import { projects } from '../../data/projects';
import { cn } from '../../utile/cn';
import ProjectContent from './ProjectContent';
import { projectTones } from './projectTones';

export default function CareerTimeline() {
  return (
    <section aria-labelledby="timeline-title" className="px-5 py-16 sm:px-10">
      <h2
        id="timeline-title"
        className="mb-12 text-center text-xl tracking-[0.2em] sm:text-3xl"
      >
        TIMELINE
      </h2>
      <ol
        className={cn(
          'relative mx-auto max-w-5xl space-y-8 before:absolute before:top-0',
          'before:bottom-0 before:left-2 before:w-1 before:bg-white/40',
          'md:space-y-0 md:before:left-1/2 md:before:-translate-x-1/2',
        )}
      >
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="relative pl-10 md:grid md:grid-cols-2 md:gap-14 md:pb-10 md:pl-0"
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-5 left-0 size-5 rounded-full border-4 border-white',
                'bg-gold md:left-1/2 md:-translate-x-1/2',
              )}
            />
            <article
              className={cn(
                'min-w-0 rounded-sm p-5 shadow-lg',
                projectTones[project.tone],
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2',
              )}
            >
              <ProjectContent project={project} />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
