import { useEffect, useMemo, useRef } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Select from '@/components/Select'
import style from './style.module.scss'
import { Column, Pill, Row, TableValue } from '../types'

export default function Filter<T extends Row>({
  column,
  hideFilter,
  filter,
  setFilter,
  closeFilter,
  values,
}: {
  column: Column<T>
  hideFilter: () => void
  filter: TableValue | undefined
  closeFilter: () => void
  setFilter: (value?: TableValue) => void
  values?: TableValue[]
}) {
  const filterRef = useRef<HTMLDivElement>(null)
  const selectValues = useMemo(() => {
    if (!values) return []
    const uniqueValuesMap = new Map<string, { value: string; label: string }>()
    values.forEach((value) => {
      if (typeof value === 'object') {
        const pillValue = value as Pill
        uniqueValuesMap.set(pillValue.text, {
          value: pillValue.text,
          label: pillValue.text,
        })
      } else {
        uniqueValuesMap.set(value.toString(), {
          value: value.toString(),
          label: value.toString(),
        })
      }
    })
    const uniqueValues = Array.from(uniqueValuesMap.values())
    return [{ value: '', label: '' }, ...uniqueValues]
  }, [values])

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

  const handleReset = () => {
    setFilter(undefined)
    closeFilter()
  }

  return (
    <div className={style.Filter} ref={filterRef}>
      <p>{column.title}</p>
      {column.type === 'string' &&
        (column.filterMode === 'select' ? (
          <Select
            options={selectValues}
            value={filter as string}
            setValue={setFilter}
          />
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
          <Select
            options={selectValues}
            value={filter as string}
            setValue={setFilter}
          />
        ) : (
          <Input
            placeholder={column.title}
            type='number'
            value={filter?.toString()}
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
      {column.type === 'pill' && (
        <Select
          options={selectValues}
          value={filter as string}
          setValue={setFilter}
        />
      )}
      <div className={style.actions}>
        <Button secondary onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={closeFilter}>Filter</Button>
      </div>
    </div>
  )
}
