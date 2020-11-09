export interface BalOptionValue<T> {
  value: string
  label: string
  data?: T
}

export const NewBalOptionValue = <T>(value: T, label: string, data?: any) => {
  return {
    value,
    label,
    data,
  }
}
