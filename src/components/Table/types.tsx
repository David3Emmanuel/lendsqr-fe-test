export type TableValue = string | number | Date | Pill

export type Row = {
  id: string
  [key: string]: TableValue
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
  filterMode?: 'search' | 'select'
}

export type ContextMenuItem = {
  title: string
  action: string | ((id: string) => void)
  icon?: string
}
