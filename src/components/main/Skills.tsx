import { skillGroups } from '../../data/skills';
import background from '../../images/desk.jpg';
import PortfolioSection from './PortfolioSection';

export default function Skills() {
  return (
    <PortfolioSection id="skills" title="SKILLS" background={background}>
      {skillGroups.map((group) => (
        <div key={group.id}>
          <h3 className="mt-5 text-xl font-bold italic sm:text-2xl">
            #{group.title}
          </h3>
          <ul>
            {group.items.map((skill) => (
              <li key={skill.id} className="mt-2">
                - {skill.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </PortfolioSection>
  );
}
