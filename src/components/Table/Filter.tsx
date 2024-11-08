import { useEffect, useRef } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Select from '@/components/Select'
import style from './filter.module.scss'
import { Column, Row, TableValue } from './types'

export function Filter<T extends Row>({
  column,
  hideFilter,
  filter,
  setFilter,
}: {
  column: Column<T>
  hideFilter: () => void
  filter: TableValue
  setFilter: (value?: TableValue) => void
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
          <Select options={[]} />
        ) : (
          <Input
            placeholder={column.title}
            type='text'
            value={filter as string}
            setValue={setFilter}
          />
        ))}
      {column.type === 'number' &&
        (column.filterMode === 'select' ? (
          <Select options={[]} />
        ) : (
          <Input
            placeholder={column.title}
            type='number'
            value={filter.toString()}
            setValue={(value: string) => setFilter(Number(value))}
          />
        ))}
      {column.type === 'date' && (
        <Input
          placeholder={column.title}
          type='date'
          value={
            filter ? (filter as Date).toISOString().split('T')[0] : undefined
          }
          setValue={(value) => setFilter(new Date(value))}
        />
      )}
      {column.type === 'pill' && <Select options={[]} />}
      <div className={style.actions}>
        <Button secondary onClick={() => setFilter(undefined)}>
          Reset
        </Button>
        <Button>Filter</Button>
      </div>
    </div>
  )
}
