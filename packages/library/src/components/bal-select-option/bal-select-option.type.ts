export interface BalOptionValue<T> {
  value: T
  text: string
  render?(option: BalOptionValue<T>): string
}

export const NewBalOptionValue = <T>(value: T, text: string, render?: (data: any) => string) => {
  return {
    value,
    text,
    render,
  }
}
