export interface BalOptionValue<T> {
  key: string
  text: string
  data?: T
  render?(option: BalOptionValue<T>): string
}

export const NewBalOptionValue = <T>(key: T, text: string, render?: (option: BalOptionValue<T>) => string) => {
  return {
    key,
    text,
    render,
  }
}
