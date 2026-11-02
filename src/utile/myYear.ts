export function getCareerYear(startYear: number, date = new Date()): number {
  return date.getFullYear() - startYear + 1;
}
