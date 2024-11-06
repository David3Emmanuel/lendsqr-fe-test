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
      <div className={style.table} role='table'>
        <div className={style.thead} role='rowgroup'>
          <div className={style.tr} role='row'>
            {columns.map((column) => (
              <div
                className={style.th}
                key={column.key.toString()}
                role='columnheader'
              >
                {column.title}
              </div>
            ))}
          </div>
        </div>
        <div className={style.tbody} role='rowgroup'>
          {data.map((row, index) => (
            <div className={style.tr} key={index} role='row'>
              {columns.map((column) => (
                <TableData
                  key={column.key.toString()}
                  type={column.type}
                  value={row[column.key]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
