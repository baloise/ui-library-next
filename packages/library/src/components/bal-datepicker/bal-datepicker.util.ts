export const now = (): Date => new Date()

export const year = (date: Date): number => date.getFullYear()
export const month = (date: Date): number => date.getMonth()
export const day = (date: Date): number => date.getDate()

export const increaseYear = (date: Date, years: number): number => year(date) + years

export const decreaseYear = (date: Date, years: number): number => year(date) - years

export const isInRange = (date: Date, minDate: Date, maxDate: Date): boolean => {
  if (date && minDate && maxDate) {
    return minDate <= date && date <= maxDate
  }
  return true
}

export const format = (date: Date): string => {
  function pad(value: number) {
    var s = `0${value}`
    return s.substr(s.length - 2)
  }
  return `${pad(day(date))}.${pad(month(date) + 1)}.${year(date)}`
}

export const getLastDayOfMonth = (year: number, month: number): number => {
  const d = new Date(year, month + 1, 0)
  return d.getDate()
}

export const getFirstDayOfTheWeek = (date: Date): Date => {
  const weekdayDiff = [6, 0, 1, 2, 3, 4, 5]
  const d = new Date(date)
  d.setDate(d.getDate() - weekdayDiff[d.getDay()])
  return d
}

export const isSameYear = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear()
}

export const isSameMonth = (a: Date, b: Date): boolean => {
  return isSameYear(a, b) && a.getMonth() === b.getMonth()
}

export const isSameDay = (a: Date, b: Date): boolean => {
  return isSameMonth(a, b) && a.getDate() === b.getDate()
}

export const isSameWeek = (a: Date, b: Date): boolean => {
  return isSameDay(getFirstDayOfTheWeek(a), getFirstDayOfTheWeek(b))
}
