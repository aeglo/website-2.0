export default function getMonthFromDate(date: Date, locale: string) {
  return date.toLocaleString(locale, { month: 'short' });
}
