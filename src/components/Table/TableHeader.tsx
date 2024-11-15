'use client'

import { Column, Row, TableValue } from './types'
import style from './style.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import Filter from './Filter'

export function TableHeader<T extends Row>({
  column,
  filter,
  setFilter,
  values,
}: {
  column: Column<T>
  filter?: TableValue
  setFilter: (value?: TableValue) => void
  values?: TableValue[]
}) {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className={style.th} role='columnheader'>
      <div className={style.innerTh}>
        {column.title}
        <Image
          src={filter ? '/filter-active.svg' : '/filter.svg'}
          alt={`Filter by ${column.title}`}
          width={16}
          height={16}
          onClick={() => setShowFilter(true)}
        />
      </div>
      {showFilter && (
        <Filter
          column={column}
          hideFilter={() => setShowFilter(false)}
          filter={filter}
          setFilter={setFilter}
          values={values}
          closeFilter={() => setShowFilter(false)}
        />
      )}
    </div>
  )
}
