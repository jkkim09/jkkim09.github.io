import type { Project } from '../../types/portfolio';
import SkillTags from '../SkillTags';

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-lg leading-snug font-bold break-keep italic sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm">
        {project.period.start} — {project.period.end}
      </p>
      {project.subtitle && <p className="mt-3 text-sm">{project.subtitle}</p>}
      <SkillTags skills={project.skills} />
      <ul className="mt-6 space-y-3 text-sm leading-relaxed break-words sm:text-base">
        {project.details.map((detail) => (
          <li key={detail}>- {detail}</li>
        ))}
      </ul>
    </>
  );
}
