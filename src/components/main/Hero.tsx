import { cn } from '../../utile/cn';
import { portfolio } from '../../data/portfolio';
import BrandHeader from './BrandHeader';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-svh flex-col"
      aria-labelledby="portfolio-title"
    >
      <BrandHeader />
      <div className="flex flex-1 items-center px-6 sm:px-10 md:px-[10%]">
        <h1
          id="portfolio-title"
          className={cn(
            'typing-heading max-w-full overflow-hidden',
            'text-[clamp(1.5rem,4.5vw,2.5rem)] tracking-[0.2em]',
            'motion-safe:animate-reveal',
          )}
        >
          {portfolio.headline}
        </h1>
      </div>
      <div className="min-h-24 w-[90%] pb-14">
        <p className="border-b border-white py-2 pr-2 text-right text-xs break-all sm:text-sm">
          Email | <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
        </p>
      </div>
    </section>
  );
}
