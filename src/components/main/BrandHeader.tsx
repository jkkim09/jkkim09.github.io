import { portfolio } from '../../data/portfolio';
import { cn } from '../../utile/cn';

export default function BrandHeader({ muted = false }: { muted?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'grid h-14 shrink-0 grid-cols-[7fr_3fr] items-center md:h-24',
        muted ? 'text-neutral-500' : 'text-gold',
      )}
    >
      <div className="border-b border-current" />
      <span className="pl-[10%] text-[clamp(2.5rem,8vw,6.25rem)] leading-none">
        {portfolio.initials}
      </span>
    </div>
  );
}
