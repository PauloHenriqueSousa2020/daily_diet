export function formatedDate(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const day = cleaned.slice(0, 2);
  const month = cleaned.slice(2, 4);
  const year = cleaned.slice(4, 8);

  let formatted = day;
  if (month) formatted += '/' + month;
  if (year) formatted += '/' + year;

  return formatted;
}