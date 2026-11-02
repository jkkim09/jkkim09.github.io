import { cn } from '../utile/cn';
import { createPortal } from 'react-dom';
import { Printer } from 'lucide-react';
import { Link } from 'react-router';
import ProfileIdentity from '../components/profile/ProfileIdentity';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ResumeHistory from '../components/profile/ResumeHistory';
import ResumeSection from '../components/profile/ResumeSection';
import SkillTags from '../components/SkillTags';
import { portfolio } from '../data/portfolio';
import { projects } from '../data/projects';
import { education, employment } from '../data/resume';
import { getCareerYear } from '../utile/myYear';
import '../styles/print.css';

export default function ProfilePage() {
  const careerYear = getCareerYear(portfolio.careerStartYear);

  return (
    <main id="main-content" className="min-h-svh bg-white text-resume-text">
      <h1 className="sr-only">{portfolio.name} 이력서</h1>
      {createPortal(
        <div className="continuedProfile hidden" aria-hidden="true">
          <ProfileIdentity />
        </div>,
        document.body,
      )}
      <div
        className={cn(
          'printToolbar sticky top-0 z-10 flex items-center justify-between',
          'gap-3 border-b border-neutral-200 bg-white px-4 py-3 sm:px-6',
        )}
      >
        <Link to="/" className="text-sm hover:underline">
          ← 포트폴리오
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className={cn(
            'printButton flex min-h-11 shrink-0 items-center gap-2 rounded-md',
            'bg-resume-accent px-4 py-2 text-sm font-bold text-white',
            'hover:bg-orange-700',
          )}
        >
          <Printer size={18} aria-hidden="true" />
          PDF 출력
        </button>
      </div>
      <article className="myPage mx-auto grid max-w-300 grid-cols-1 md:grid-cols-[230px_minmax(0,1fr)]">
        <ProfileSidebar />
        <div className="projectInfo min-w-0 px-4 pt-8 pb-28 sm:px-8 md:py-10">
          <ResumeSection title="자기소개">
            <div className="mySelf space-y-2 px-2 py-5 text-sm leading-8 sm:px-4">
              {portfolio.introduction.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph.replaceAll(
                    '{previousYears}',
                    String(careerYear - 1),
                  )}
                </p>
              ))}
            </div>
          </ResumeSection>
          <ResumeSection title="학력사항">
            <ResumeHistory
              items={education}
              renderItem={(item) => (
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {item.note && <p className="mt-1">{item.note}</p>}
                </div>
              )}
            />
          </ResumeSection>
          <ResumeSection
            title="경력"
            meta={`${portfolio.careerStartLabel} ~ (${careerYear}년차)`}
          >
            <ResumeHistory
              items={employment}
              renderItem={(item) => (
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.description.map((line) => (
                    <p key={line} className="mt-2">
                      {line}
                    </p>
                  ))}
                  {item.note && <p className="mt-2">{item.note}</p>}
                </div>
              )}
            />
          </ResumeSection>
          <ResumeSection title="프로젝트 경험">
            <ResumeHistory
              items={projects}
              renderItem={(project) => (
                <>
                  <SkillTags skills={project.skills} resume />
                  <div className="historyEcp-list py-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <ul className="mt-3 list-disc space-y-3 pl-4">
                      {project.highlights.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            />
          </ResumeSection>
        </div>
      </article>
    </main>
  );
}
