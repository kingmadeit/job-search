export const currencyFormatter = (val: number, locale = 'en-US', currency = 'USD'): string => {
  return val.toLocaleString(locale, {style:"currency", currency: currency});
}

export const daysAgo = (day1: string, day2: string) => {
  const date1 = new Date(day1);
  const date2 = new Date(day2);

  // To calculate the time difference of two dates
  const timeDiff = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  // 1000mils * 60secs * 60mins * 24 (for secs in a day)
  let daysBetween = Math.round(timeDiff / (1000 * 3600 * 24));

  return daysBetween;

}