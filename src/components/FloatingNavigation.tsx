import { useEffect, useRef, useState } from 'react';
import { CalendarDays, Home, Menu, UserRound, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { cn } from '../utile/cn';

const links = [
  { to: '/', label: '메인', icon: Home },
  { to: '/calender', label: '일정', icon: CalendarDays },
  { to: '/profile', label: '프로필', icon: UserRound },
];

export default function FloatingNavigation() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !container.current?.contains(event.target)
      )
        setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <nav
      ref={container}
      aria-label="페이지 이동"
      className={cn(
        'fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50',
        'flex flex-col items-end gap-3 print:hidden',
      )}
    >
      <ul
        id="page-navigation"
        hidden={!open}
        className="flex flex-col items-end gap-3"
      >
        {links.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'flex min-h-11 items-center gap-3 rounded-full px-4 py-3',
                  'text-sm font-medium shadow-lg',
                  isActive
                    ? 'bg-gold text-black'
                    : 'bg-white text-neutral-800 hover:bg-neutral-100',
                )
              }
            >
              <span>{label}</span>
              <Icon size={20} aria-hidden="true" />
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        ref={trigger}
        type="button"
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        aria-controls="page-navigation"
        onClick={() => setOpen(!open)}
        className={cn(
          'grid size-14 place-items-center rounded-full bg-gold text-black',
          'shadow-lg hover:bg-gold-light focus-visible:outline-2',
          'focus-visible:outline-offset-4 focus-visible:outline-gold',
        )}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  );
}
