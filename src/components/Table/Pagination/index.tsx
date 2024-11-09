'use client'

import Select from '@/components/Select'
import style from './style.module.scss'
import getPageNumbers from './getPageNumbers'

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

export interface PaginationInfo {
  page: number
  setPage: (page: number) => void
  count: number
  setCount: (count: number) => void
  numberOfPages: number
  countOptions: { value: string; label: string }[]
  total: number
}
