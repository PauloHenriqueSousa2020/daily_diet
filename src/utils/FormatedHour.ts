export function formatedHour(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const hour = cleaned.slice(0, 2);
  const minute = cleaned.slice(2, 4);

  let formatted = hour;
  if (minute) formatted += ':' + minute;

  return formatted;
}