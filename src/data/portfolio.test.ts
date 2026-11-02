import { describe, expect, test } from 'vitest';
import { projects } from './projects';
import { events } from './events';
import { education, employment } from './resume';
import { skillGroups, hobbies } from './skills';
import { getCareerYear } from '../utile/myYear';

describe('editable content', () => {
  test('has stable unique IDs for every list', () => {
    for (const entries of [
      projects,
      events,
      education,
      employment,
      skillGroups,
      hobbies,
      ...skillGroups.map((group) => group.items),
    ]) {
      const ids = entries.map((item) => item.id);
      expect(ids.every(Boolean)).toBe(true);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  test('keeps project content available to all three views', () => {
    for (const project of projects) {
      expect(project.title.trim()).not.toBe('');
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.details.length).toBeGreaterThan(0);
      expect(new Set(project.skills).size).toBe(project.skills.length);
    }
  });

  test('increments career year at the start of each year', () => {
    expect(getCareerYear(2017, new Date(2025, 11, 31))).toBe(9);
    expect(getCareerYear(2017, new Date(2026, 0, 1))).toBe(10);
  });
});
