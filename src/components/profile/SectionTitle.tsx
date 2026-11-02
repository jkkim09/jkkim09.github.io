import { cn } from '../../utile/cn';
import type { ReactNode } from 'react';

export default function SectionTitle({
  children,
  meta,
}: {
  children: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <h2
      className={cn(
        'listArea-title flex flex-wrap items-end justify-between gap-2',
        'border-b border-resume-text px-1 py-1 text-lg font-semibold',
      )}
    >
      <span>
        <span className="text-resume-accent">{'///'}</span> {children}
      </span>
      {meta && <span className="text-xs font-normal">{meta}</span>}
    </h2>
  );
}
