import { cn } from '../../utile/cn';
import type { ReactNode } from 'react';
import BrandHeader from './BrandHeader';

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  background?: string;
}

export default function PortfolioSection({
  id,
  title,
  children,
  background,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex min-h-svh flex-col"
    >
      <BrandHeader muted={id === 'skills'} />
      <div
        className={cn(
          'grid flex-1 items-center gap-10 bg-cover bg-center px-6 py-16',
          'sm:px-10 md:grid-cols-2 md:gap-8 md:px-[5%]',
        )}
        style={
          background ? { backgroundImage: `url(${background})` } : undefined
        }
      >
        <h2
          id={`${id}-title`}
          className={cn(
            'typing-heading w-fit max-w-full text-[clamp(1.5rem,4vw,2.5rem)]',
            'tracking-[0.25em] break-words md:ml-[10%]',
          )}
        >
          {title}
        </h2>
        <div className="min-w-0 space-y-3 text-base leading-relaxed break-words sm:text-lg md:pl-[15%]">
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="h-12 shrink-0 md:h-24" />
    </section>
  );
}
