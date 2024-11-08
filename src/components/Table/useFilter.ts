import { useMemo } from 'react'
import { Column, Row, TableValue } from './types'

export default function useFilter<T extends Row>(
    data: T[],
    columns: Column<T>[],
    filters: {
        [key: string]: TableValue
    },
    setFilters: (filters: { [key: string]: TableValue }) => void,
) {
    const filteredData = useMemo(() => {
        return data.filter((row) => {
            return Object.keys(filters).every((key) => {
                const column = columns.find((col) => col.key === key)
                if (!column) return true

                const value = row[key]
                const filter = filters[key]

                if (typeof filter === 'undefined') return true
                if (typeof filter === 'string') {
                    const stringValue = value as string
                    const filterValue = filter as string
                    return stringValue
                        .toLowerCase()
                        .includes(filterValue.toLowerCase())
                }

                console.log('Invalid type found', value, filter)
            })
        })
    }, [data, filters, columns])

    const clearFilters = () => setFilters({})

    return { filters, setFilters, clearFilters, filteredData }
}
