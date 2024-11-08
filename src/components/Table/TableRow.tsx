'use client'

import { useState } from 'react'
import TableData from './TableData'
import { Column, ContextMenuItem, Row } from './types'
import Link from 'next/link'
import { ContextMenu } from './ContextMenu'

import style from './style.module.scss'

export function TableRow<T extends Row>({
  row,
  columns,
  baseHref,
  contextMenu,
}: {
  row: T
  columns: Column<T>[]
  baseHref?: string
  contextMenu?: ContextMenuItem[]
}) {
  const [contextMenuVisible, setContextMenuVisible] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  const handleContextMenu = (event: React.MouseEvent) => {
    if (!contextMenu) return

    event.preventDefault()
    setContextMenuVisible(true)
    setContextMenuPosition({ x: event.clientX, y: event.clientY })
  }

  const handleCloseContextMenu = () => setContextMenuVisible(false)

  const content = columns.map((column) => (
    <TableData
      key={column.key.toString()}
      type={column.type}
      value={row[column.key]}
    />
  ))

  return (
    <>
      <_TableRow
        href={baseHref ? `${baseHref}/${row.id}` : undefined}
        key={row.id}
        role='row'
        onContextMenu={handleContextMenu}
        className={style.tr}
      >
        {content}
        {contextMenu && (
          <div onClick={handleContextMenu} className={style.td}>
            <i className='fa fa-ellipsis-v' aria-hidden='true'></i>
          </div>
        )}
      </_TableRow>
      {contextMenuVisible && contextMenu && (
        <ContextMenu
          menu={contextMenu}
          id={row.id}
          position={contextMenuPosition}
          onClose={handleCloseContextMenu}
          isOpen={contextMenuVisible}
        />
      )}
    </>
  )
}

function _TableRow({
  children,
  href,
  ...rowProps
}: {
  children: React.ReactNode
  href?: string
  role?: string
  onContextMenu?: (event: React.MouseEvent) => void
  className?: string
}) {
  if (href)
    return (
      <Link href={href} {...rowProps}>
        {children}
      </Link>
    )
  else return <div {...rowProps}>{children}</div>
}
