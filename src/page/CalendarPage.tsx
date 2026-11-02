import { cn } from '../utile/cn';
import FullCalendar, { useCalendarController } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/react/daygrid';
import timeGridPlugin from '@fullcalendar/react/timegrid';
import themePlugin from '@fullcalendar/react/themes/classic';
import koLocale from '@fullcalendar/react/locales/ko';
import '@fullcalendar/react/skeleton.css';
import '@fullcalendar/react/themes/classic/theme.css';
import '@fullcalendar/react/themes/classic/palette.css';
import { events } from '../data/events';
import CalendarToolbar from '../components/CalendarToolbar';

const plugins = [themePlugin, dayGridPlugin, timeGridPlugin];

export default function CalendarPage() {
  const controller = useCalendarController();
  const view = controller.view;
  return (
    <main
      id="main-content"
      className={cn(
        'calendar-page min-h-svh min-w-0 bg-black px-3 pt-8 pb-28 text-white',
        'sm:px-8 lg:px-16',
      )}
    >
      <h1 className="mb-8 text-center text-xl font-semibold text-gold sm:text-3xl">
        [JK 일정 관리]
      </h1>
      <div className="mx-auto max-w-6xl min-w-0 rounded-lg bg-white p-2 text-neutral-800 sm:p-5">
        {view && <CalendarToolbar controller={controller} view={view} />}
        <FullCalendar
          controller={controller}
          plugins={plugins}
          locale={koLocale}
          initialView="dayGridMonth"
          headerToolbar={false}
          events={events}
          height="auto"
          dayMaxEvents={2}
        />
      </div>
    </main>
  );
}
