import { cn } from './utile/cn';
import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router';
import FloatingNavigation from './components/FloatingNavigation';
import MainPage from './page/MainPage';

const CalendarPage = lazy(() => import('./page/CalendarPage'));
const ProfilePage = lazy(() => import('./page/ProfilePage'));
const PrintTestPage = lazy(() => import('./page/PrintTestPage'));

export default function App() {
  return (
    <div className="App min-h-svh min-w-0">
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2',
          'focus:z-100 focus:bg-white focus:p-3 focus:text-black',
        )}
      >
        본문으로 건너뛰기
      </a>
      <Suspense
        fallback={
          <p role="status" className="p-8 text-white">
            화면을 불러오는 중입니다.
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<MainPage />} />
          <Route path="/calender" element={<CalendarPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/test" element={<PrintTestPage />} />
          <Route
            path="*"
            element={
              <main
                id="main-content"
                className="grid min-h-svh place-content-center gap-6 p-6 text-center text-white"
              >
                <h1 className="text-2xl">페이지를 찾을 수 없습니다.</h1>
                <Link to="/" className="text-gold underline">
                  메인으로 돌아가기
                </Link>
              </main>
            }
          />
        </Routes>
      </Suspense>
      <FloatingNavigation />
    </div>
  );
}
