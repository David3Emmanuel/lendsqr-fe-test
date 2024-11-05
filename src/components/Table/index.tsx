import TableData from './TableData'
import { Column, Row } from './types'
import style from './style.module.scss'

// TODO add context menu
// TODO add sorting and filtering
// TODO add pagination

export function Table<T extends Row>({
  columns,
  data,
}: {
  columns: Column<T>[]
  data: T[]
}) {
  return (
    <div className={style.Table}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key.toString()}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <TableData
                  key={column.key.toString()}
                  type={column.type}
                  value={row[column.key]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
