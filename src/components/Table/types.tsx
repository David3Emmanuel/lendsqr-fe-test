export type Row = {
  [key: string]: string | number | Date | Pill
}

export type PillColor = 'green' | 'red' | 'yellow' | 'neutral'

export type Pill = {
  text: string
  color: PillColor
}

export type ColumnType = 'string' | 'number' | 'date' | 'pill'

export interface Column<T extends Row> {
  key: keyof T
  type: ColumnType
  title: string
}