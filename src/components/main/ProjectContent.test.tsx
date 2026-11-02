import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';
import { projects } from '../../data/projects';
import Experience from './Experience';
import CareerTimeline from './CareerTimeline';

test('EXPERIENCE and TIMELINE display identical content for each project', () => {
  render(
    <>
      <Experience />
      <CareerTimeline />
    </>,
  );
  const experience = screen.getByRole('region', { name: 'EXPERIENCE' });
  const timeline = screen.getByRole('region', { name: 'TIMELINE' });

  for (const project of projects.filter((project) => project.featured)) {
    const card = within(experience)
      .getByRole('heading', { name: project.title })
      .closest('article');
    const entry = within(timeline)
      .getByRole('heading', { name: project.title })
      .closest('article');
    expect(card).not.toBeNull();
    expect(entry).not.toBeNull();
    expect(card?.textContent).toBe(entry?.textContent);
  }
});
