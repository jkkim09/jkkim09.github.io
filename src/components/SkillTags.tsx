import { cn } from '../utile/cn';

export default function SkillTags({
  skills,
  resume = false,
}: {
  skills: readonly string[];
  resume?: boolean;
}) {
  return (
    <ul
      aria-label="사용 기술"
      className={cn(
        'flex flex-wrap gap-2',
        resume ? 'historyEcp-skills' : 'mt-4',
      )}
    >
      {skills.map((skill) => (
        <li
          key={skill}
          className={cn(
            'max-w-full rounded px-2.5 py-1',
            'text-xs leading-snug font-semibold break-words text-white',
            resume ? 'bg-resume-accent' : 'bg-[#d85b5b]',
          )}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
