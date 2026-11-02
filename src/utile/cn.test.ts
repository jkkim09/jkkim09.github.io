import { expect, test } from 'vitest';
import { cn } from './cn';

test('combines optional classes and resolves conflicting utilities', () => {
  expect(cn('p-4', false, undefined, ['flex', { hidden: false }], 'p-6')).toBe(
    'flex p-6',
  );
});

test('merges custom theme colors without discarding font size', () => {
  expect(
    cn('bg-black text-sm text-gold', 'bg-gold text-resume-accent')
      .split(' ')
      .sort(),
  ).toEqual(['bg-gold', 'text-resume-accent', 'text-sm']);
});

test('keeps responsive variants independent', () => {
  expect(cn('grid-cols-1 md:grid-cols-2', 'md:grid-cols-3')).toBe(
    'grid-cols-1 md:grid-cols-3',
  );
});
