'use client'
import { useState } from 'react'
import { PaginationInfo } from '.'
import { Row } from '../types'

export default function usePagination<T extends Row>(
    data: T[],
): { paginatedData: T[]; paginationInfo: PaginationInfo } {
    const total = data.length
    const [page, _setPage] = useState(1)
    const [count, _setCount] = useState(10)
    const numberOfPages = Math.ceil(total / count)

    const countOptions = [10, 25, 50, 100]
        .filter((i) => i <= total)
        .map((value) => ({
            value: value.toString(),
            label: value.toString(),
        }))

    if (countOptions.length === 0)
        countOptions.push({
            value: total.toString(),
            label: total.toString(),
        })

    const start = (page - 1) * count
    const end = start + count
    const paginatedData = data.slice(start, end)

    const setPage = (page: number) => {
        if (page < 1 || page > numberOfPages) return
        _setPage(page)
    }

    const setCount = (count: number) => {
        _setCount(count)
        setPage(1)
    }

    return {
        paginatedData,
        paginationInfo: {
            page,
            setPage,
            count,
            setCount,
            numberOfPages,
            countOptions,
            total,
        },
    }
}
