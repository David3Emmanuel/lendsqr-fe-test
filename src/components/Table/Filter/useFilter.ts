import { useMemo } from 'react'
import { Column, Pill, Row, TableValue } from '../types'

export default function useFilter<T extends Row>(
    data: T[],
    columns: Column<T>[],
    filters: {
        [key: string]: TableValue | undefined
    },
    setFilters: (filters: { [key: string]: TableValue }) => void,
) {
    const filteredData = useMemo(() => {
        return data.filter((row) => {
            return Object.keys(filters).every(
                filterByColumn<T>(columns, row, filters),
            )
        })
    }, [data, filters, columns])

    const clearFilters = () => setFilters({})

    return { filters, setFilters, clearFilters, filteredData }
}
function filterByColumn<T extends Row>(
    columns: Column<T>[],
    row: T,
    filters: { [key: string]: TableValue | undefined },
): (value: string, index: number, array: string[]) => boolean {
    return (key) => {
        const column = columns.find((col) => col.key === key)
        if (!column) return true

        const value = row[key]
        const filter = filters[key]

        if (typeof filter === 'undefined') return true
        const filterString = String(filter).toLowerCase()

        switch (column.type) {
            case 'string':
                const valueString = String(value).toLowerCase()
                return valueString.includes(filterString)
            case 'number':
                const filterNumber = Number(filter)
                return value === filterNumber
            case 'date':
                const filterDate = new Date(filter as string)
                const valueDate = value as Date
                return (
                    valueDate.getFullYear() === filterDate.getFullYear() &&
                    valueDate.getMonth() === filterDate.getMonth() &&
                    valueDate.getDate() === filterDate.getDate()
                )
            case 'pill':
                const valuePill = value as Pill
                return valuePill.text.toLowerCase() === filterString
            default:
                console.log('Unsupported column type', column.type)
                return true
        }
    }
}
