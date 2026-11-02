import { cn } from '../../utile/cn';
import type { IconItem } from '../../types/portfolio';

export default function IconGrid({ items }: { items: readonly IconItem[] }) {
  return (
    <ul
      className={cn(
        'items mt-4 grid grid-cols-2 gap-x-3 gap-y-4 min-[360px]:grid-cols-4',
        'md:grid-cols-2',
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="item flex min-w-0 flex-col items-center gap-2"
        >
          <img
            src={item.image}
            alt=""
            width="40"
            height="40"
            loading="lazy"
            className="size-10 object-contain"
          />
          <span className="text-center text-[0.7rem] break-words">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
