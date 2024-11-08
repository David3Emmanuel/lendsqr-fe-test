'use client'

import { Column, Row, ContextMenuItem, TableValue } from './types'
import style from './style.module.scss'
import { TableRow } from './TableRow'
import { TableHeader } from './TableHeader'
import useFilter from './useFilter'
import { useState } from 'react'

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
  const [filters, setFilters] = useState<{ [key: string]: TableValue }>({})
  const { filteredData } = useFilter(data, columns, filters, setFilters)

  const setFilter = (key: string, value?: TableValue) => {
    setFilters((prev) => {
      const newFilters = { ...prev }
      if (value) newFilters[key] = value
      else delete newFilters[key]

      return newFilters
    })
  }

  return (
    <div className={style.Table}>
      <div className={style.table} role='table'>
        <div className={style.thead} role='rowgroup'>
          <div className={style.tr} role='row'>
            {columns.map((column) => {
              const key = column.key.toString()
              const _setFilter = (value?: TableValue) => setFilter(key, value)
              return (
                <TableHeader
                  key={key}
                  column={column}
                  filter={filters[key]}
                  setFilter={_setFilter}
                />
              )
            })}
          </div>
        </div>
        <div className={style.tbody} role='rowgroup'>
          {filteredData.map((row, index) => (
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
