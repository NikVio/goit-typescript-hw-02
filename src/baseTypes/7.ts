/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
 MONDAY,
  TUESDAY,
 WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(day: Weekdays): boolean {
  return day === Weekdays.SATURDAY || day === Weekdays.SUNDAY;
}