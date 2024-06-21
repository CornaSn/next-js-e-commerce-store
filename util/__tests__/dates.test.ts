import { expect, test } from '@jest/globals';
import { formatDate } from '../dates';

test('format date for displaying the date with different local date formats', () => {
  expect(formatDate(new Date('2024-02-07'))).toBe('07/02/2024');
});
