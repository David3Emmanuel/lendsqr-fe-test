'use client'

import { useState } from 'react'
import Select from '../Select'
import style from './pagination.module.scss'
import { Row } from './types'

export function Pagination({ info }: { info: PaginationInfo }) {
  const currentPage = info.page
  const numberOfPages = info.numberOfPages

  const pageNumbers = getPageNumbers(currentPage, numberOfPages)

  return (
    <div className={style.Pagination}>
      <div className={style.count}>
        <span>Showing</span>
        <Select
          className={style.Select}
          options={info.countOptions}
          value={info.count.toString()}
          setValue={(value) => info.setCount(Number(value))}
        />
        <span>out of {info.total}</span>
      </div>
      <div className={style.pages}>
        <button
          className={style.prevNext}
          onClick={() => info.setPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <i className='fa-solid fa-angle-left' />
        </button>
        {pageNumbers.map((pageNumber, index) =>
          pageNumber === -1 ? (
            <button key={index}>...</button>
          ) : (
            <button
              key={index}
              onClick={() => info.setPage(pageNumber)}
              className={
                pageNumber === currentPage ? style.currentPage : undefined
              }
            >
              {pageNumber}
            </button>
          ),
        )}
        <button
          className={style.prevNext}
          onClick={() => info.setPage(Math.min(numberOfPages, currentPage + 1))}
          disabled={currentPage === numberOfPages}
        >
          <i className='fa-solid fa-angle-right' />
        </button>
      </div>
    </div>
  )
}

interface PaginationInfo {
  page: number
  setPage: (page: number) => void
  count: number
  setCount: (count: number) => void
  numberOfPages: number
  countOptions: { value: string; label: string }[]
  total: number
}

export function usePagination<T extends Row>(
  data: T[],
): { paginatedData: T[]; paginationInfo: PaginationInfo } {
  const total = data.length
  const [page, _setPage] = useState(1)
  const [count, _setCount] = useState(10)
  const numberOfPages = Math.ceil(total / count)

  const countOptions = [10, 25, 50, 100].map((value) => ({
    value: value.toString(),
    label: value.toString(),
  }))

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

function getPageNumbers(currentPage: number, numberOfPages: number): number[] {
  const numberOfPrefixedPages = 2
  const numberOfSuffixedPages = 2
  const maxNumberOfPagesOnEachSide = 2

  const pageNumbers = []
  if (numberOfPages <= maxNumberOfPagesOnEachSide * 2 + 1) {
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    const min = currentPage - maxNumberOfPagesOnEachSide
    const max = currentPage + maxNumberOfPagesOnEachSide

    if (min >= numberOfPrefixedPages + 1) {
      for (let i = 1; i <= numberOfPrefixedPages; i++) {
        pageNumbers.push(i)
      }
      if (min > numberOfPrefixedPages + 1) {
        pageNumbers.push(-1)
      }
    }

    for (let i = min; i <= max; i++) {
      if (i >= 1 && i <= numberOfPages) {
        pageNumbers.push(i)
      }
    }

    if (max <= numberOfPages - numberOfSuffixedPages - 1) {
      pageNumbers.push(-1)
    }

    if (max < numberOfPages) {
      for (
        let i = Math.max(max + 1, numberOfPages - numberOfSuffixedPages + 1);
        i <= numberOfPages;
        i++
      ) {
        pageNumbers.push(i)
      }
    }
  }

  return pageNumbers
}
