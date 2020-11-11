export const now = (): Date => new Date()

export const year = (date: Date): number => date.getFullYear()

export const increaseYear = (date: Date, years: number): number => year(date) + years

export const decreaseYear = (date: Date, years: number): number => year(date) - years
