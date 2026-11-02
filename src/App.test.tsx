import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, test, vi } from 'vitest';
import App from './App';
import { projects } from './data/projects';

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('portfolio routes', () => {
  test.each(['/', '/about'])('renders the portfolio at %s', (path) => {
    renderRoute(path);
    for (const name of [
      'DEVELOPER',
      'INDEX',
      'SKILLS',
      'EXPERIENCE',
      'TIMELINE',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
    const timeline = screen.getByRole('region', { name: 'TIMELINE' });
    expect(within(timeline).getAllByRole('article')).toHaveLength(
      projects.length,
    );
  });

  test('opens the navigation, changes route, and closes the menu', async () => {
    const user = userEvent.setup();
    renderRoute('/');
    expect(
      screen.queryByRole('link', { name: '프로필' }),
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '메뉴 열기' }));
    await user.click(screen.getByRole('link', { name: '프로필' }));
    expect(
      await screen.findByRole('heading', { name: '김자경 이력서' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '메뉴 열기' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(
      screen.queryByRole('link', { name: '프로필' }),
    ).not.toBeInTheDocument();
  });

  test('closes the menu with Escape and restores keyboard focus', async () => {
    const user = userEvent.setup();
    renderRoute('/profile');
    await screen.findByRole('button', { name: 'PDF 출력' });
    await user.click(screen.getByRole('button', { name: '메뉴 열기' }));
    await user.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: '메뉴 열기' })).toHaveFocus();
  });

  test.each(['/calender', '/calendar'])(
    'renders the calendar at %s',
    async (path) => {
      renderRoute(path);
      expect(
        await screen.findByRole('heading', { name: '[JK 일정 관리]' }),
      ).toBeInTheDocument();
      expect(
        await screen.findByRole('button', { name: '오늘' }),
      ).toBeInTheDocument();
    },
  );

  test('prints the resume with all centralized projects', async () => {
    const user = userEvent.setup();
    const print = vi.spyOn(window, 'print').mockImplementation(() => {});
    renderRoute('/profile');
    expect(
      await screen.findByRole('heading', { name: /자기소개/ }),
    ).toBeInTheDocument();
    for (const project of projects)
      expect(
        screen.getByRole('heading', { name: project.title }),
      ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'PDF 출력' }));
    expect(print).toHaveBeenCalledOnce();
  });

  test('preserves the print layout test route', async () => {
    renderRoute('/test');
    expect(
      await screen.findByRole('main', { name: '출력 레이아웃 테스트' }),
    ).toBeInTheDocument();
  });

  test('offers a working home link for unknown routes', async () => {
    const user = userEvent.setup();
    renderRoute('/missing');
    await user.click(screen.getByRole('link', { name: '메인으로 돌아가기' }));
    expect(
      screen.getByRole('heading', { name: 'DEVELOPER' }),
    ).toBeInTheDocument();
  });
});
