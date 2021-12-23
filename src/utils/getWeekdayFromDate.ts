export default function getWeekdayFromDate(date: Date, locale: string) {
  return date.toLocaleDateString(locale, { weekday: "short" });
}
