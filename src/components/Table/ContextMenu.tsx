import React, { useEffect, useRef } from 'react'
import { ContextMenuItem } from './types'
import Link from 'next/link'

import style from './context-menu.module.scss'

export function ContextMenu({
  menu,
  id,
  position,
  onClose,
  isOpen,
}: {
  menu: ContextMenuItem[]
  id: string
  position?: { x: number; y: number }
  onClose?: () => void
  isOpen?: boolean
}) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // TODO add safe area

      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect()
        const isOutside =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom

        if (isOutside && onClose) onClose()
      }
    }

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }

    const menuElement = menuRef.current
    if (menuElement) {
      menuElement.addEventListener('mouseleave', handleMouseLeave)
      menuElement.addEventListener('contextmenu', handleContextMenu)
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener('mouseleave', handleMouseLeave)
        menuElement.removeEventListener('contextmenu', handleContextMenu)
      }
    }
  }, [onClose, isOpen])

  useEffect(() => {
    if (menuRef.current && position) {
      const rect = menuRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth

      if (rect.right > viewportWidth) {
        menuRef.current.style.left = `${viewportWidth - rect.width}px`
      }
      if (rect.left < 0) {
        menuRef.current.style.left = `0px`
      }
    }
  }, [position, isOpen])

  return (
    <div
      ref={menuRef}
      style={
        position
          ? { top: position.y, left: position.x, position: 'absolute' }
          : {}
      }
      className={style.ContextMenu}
    >
      {menu.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (typeof item.action === 'function') item.action(id)
            if (onClose) onClose()
          }}
        >
          {item.icon && <i className={`fa-solid fa-${item.icon}`} />}
          {typeof item.action === 'string' ? (
            <Link href={`${item.action}/${id}`}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
        </div>
      ))}
    </div>
  )
}
