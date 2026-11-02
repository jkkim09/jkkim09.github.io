import { cn } from '../../utile/cn';
import type { ReactNode } from 'react';
import type { DatedEntry } from '../../types/portfolio';

interface Props<T extends DatedEntry> {
  items: readonly T[];
  renderItem: (item: T) => ReactNode;
}

export default function ResumeHistory<T extends DatedEntry>({
  items,
  renderItem,
}: Props<T>) {
  return (
    <ol
      className={cn(
        'history relative py-4 before:absolute before:top-6 before:bottom-6',
        'before:left-20 before:w-1 before:bg-resume-accent',
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            'history-item relative grid grid-cols-[64px_minmax(0,1fr)]',
            'items-center gap-9 py-3 not-first:mt-6',
          )}
        >
          <span className="history-left text-center text-xs leading-relaxed sm:text-sm">
            {item.period.start}
            <br />~<br />
            {item.period.end}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'history-point absolute top-1/2 left-18 size-5 -translate-y-1/2',
              'rounded-full border-2 border-resume-text bg-resume-accent',
            )}
          />
          <div className="historyEcp-right min-w-0 text-sm leading-relaxed wrap-anywhere">
            {renderItem(item)}
          </div>
        </li>
      ))}
    </ol>
  );
}
