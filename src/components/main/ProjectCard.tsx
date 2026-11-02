import type { Project } from '../../types/portfolio';
import { cn } from '../../utile/cn';
import ProjectContent from './ProjectContent';
import { projectTones } from './projectTones';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        'mx-9 min-h-112 rounded-sm p-5 text-[#fdeaea]',
        'sm:min-h-125 sm:p-8',
        projectTones[project.tone],
      )}
    >
      <ProjectContent project={project} />
    </article>
  );
}
