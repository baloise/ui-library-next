export interface BalOptionValue<T> {
  value: T
  text: string
  render(data: any): string
}
