'use client'

import { Column, Row } from './types'
import style from './style.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { Filter } from './Filter'

export function TableHeader<T extends Row>({ column }: { column: Column<T> }) {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className={style.th} role='columnheader'>
      <div className={style.innerTh}>
        {column.title}
        <Image
          src='/filter.svg'
          alt='Filter'
          width={16}
          height={16}
          onClick={() => setShowFilter(true)}
        />
      </div>
      {showFilter && (
        <Filter column={column} hideFilter={() => setShowFilter(false)} />
      )}
    </div>
  )
}
