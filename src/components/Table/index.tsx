import { Column, Row, ContextMenuItem } from './types'
import style from './style.module.scss'
import { TableRow } from './TableRow'

// TODO add sorting and filtering
// TODO add pagination

export function Table<T extends Row>({
  columns,
  data,
  baseHref,
  contextMenu,
}: {
  columns: Column<T>[]
  data: T[]
  baseHref?: string
  contextMenu?: ContextMenuItem[]
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
            <TableRow
              key={index}
              row={row}
              columns={columns}
              baseHref={baseHref}
              contextMenu={contextMenu}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
