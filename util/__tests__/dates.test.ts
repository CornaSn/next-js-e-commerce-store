import { expect, test } from '@jest/globals';
import { formatDate } from '../dates';

test('format date for displaying the date with different local date formats', () => {
  expect(formatDate(new Date('2024-09-14'))).toBe('14/09/2024');
  expect(formatDate(new Date('2024-09-14'), 'en-US')).toBe('09/14/2024');
});
