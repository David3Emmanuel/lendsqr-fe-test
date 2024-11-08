import { useEffect, useRef } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Select from '@/components/Select'
import style from './filter.module.scss'
import { Column, Row } from './types'

export function Filter<T extends Row>({
  column,
  hideFilter,
}: {
  column: Column<T>
  hideFilter: () => void
}) {
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        hideFilter()
      }
    }

    function ensureInView() {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect()
        const rightEdge = window.innerWidth - 30

        if (rect.right > rightEdge) {
          filterRef.current.style.left = `${rightEdge - rect.right}px`
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', ensureInView)
    ensureInView()

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', ensureInView)
    }
  }, [hideFilter])

  return (
    <div className={style.Filter} ref={filterRef}>
      <p>{column.title}</p>
      {column.type === 'string' &&
        (column.filterMode === 'select' ? (
          <StringFilterSelect />
        ) : (
          <StringFilterInput title={column.title} />
        ))}
      {column.type === 'date' && <DateFilter title={column.title} />}
      {column.type === 'pill' && <PillFilter />}
      <div className={style.actions}>
        <Button secondary>Reset</Button>
        <Button>Filter</Button>
      </div>
    </div>
  )
}

function StringFilterInput({ title }: { title: string }) {
  return <Input placeholder={title} type='text' />
}

function StringFilterSelect() {
  return <Select options={[]} />
}

// TODO add number filter

function DateFilter({ title }: { title: string }) {
  return <Input placeholder={title} type='date' />
}

function PillFilter() {
  return <Select options={[]} />
}
