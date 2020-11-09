export interface BalOptionValue<T> {
  value: string
  text: string
  data?: T
  render?(option: BalOptionValue<T>): string
}

export const NewBalOptionValue = <T>(value: T, text: string, render?: (data: any) => string) => {
  return {
    value,
    text,
    render,
  }
}
