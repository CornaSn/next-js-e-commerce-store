export function formatDate(
  date: Date,
  locale: string = 'en-GB',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  },
) {
  if (!(date instanceof Date)) {
    throw new Error('Pass only dates!');
  }
  return date.toLocaleDateString(locale, options);
}

export function formatTime(
  date: Date,
  locale: string = 'en-GB',
  options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  },
) {
  if (!(date instanceof Date)) {
    throw new Error('Pass only dates!');
  }
  return date.toLocaleTimeString(locale, options);
}
