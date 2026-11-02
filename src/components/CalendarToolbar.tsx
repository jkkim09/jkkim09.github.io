import type { CalendarController, ViewApi } from '@fullcalendar/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utile/cn';

const views = [
  { type: 'dayGridMonth', label: '월' },
  { type: 'timeGridWeek', label: '주' },
  { type: 'timeGridDay', label: '일' },
];

export default function CalendarToolbar({
  controller,
  view,
}: {
  controller: CalendarController;
  view: ViewApi;
}) {
  const buttons = controller.getButtonState();
  return (
    <div className="mb-5 flex flex-col items-center justify-between gap-4 sm:flex-row sm:flex-wrap">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={buttons.prev.hint}
          disabled={buttons.prev.isDisabled}
          onClick={() => controller.prev()}
          className={cn(
            'grid size-11 place-items-center rounded border border-neutral-300',
            'hover:bg-neutral-100 disabled:opacity-40',
          )}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={buttons.next.hint}
          disabled={buttons.next.isDisabled}
          onClick={() => controller.next()}
          className={cn(
            'grid size-11 place-items-center rounded border border-neutral-300',
            'hover:bg-neutral-100 disabled:opacity-40',
          )}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled={buttons.today.isDisabled}
          onClick={() => controller.today()}
          className={cn(
            'min-h-11 rounded border border-neutral-300 px-3 text-sm',
            'hover:bg-neutral-100 disabled:opacity-40',
          )}
        >
          {buttons.today.text}
        </button>
      </div>
      <h2 aria-live="polite" className="text-lg font-semibold sm:text-xl">
        {view.title}
      </h2>
      <div
        role="group"
        aria-label="일정 보기"
        className="flex gap-1 rounded border border-neutral-300 p-1"
      >
        {views.map((item) => (
          <button
            key={item.type}
            type="button"
            aria-pressed={view.type === item.type}
            onClick={() => controller.changeView(item.type)}
            className={cn(
              'min-h-11 min-w-14 rounded px-3 text-sm',
              view.type === item.type
                ? 'bg-gold text-black'
                : 'hover:bg-neutral-100',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
