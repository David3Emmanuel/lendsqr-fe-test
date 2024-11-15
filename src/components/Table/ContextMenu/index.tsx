import { useEffect, useRef } from 'react'
import { ContextMenuItem } from '../types'
import Link from 'next/link'

import style from './style.module.scss'

export default function ContextMenu({
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
    if (!position || !menuRef.current) return
    const left = position.x - 10
    const right = position.y - 10
    menuRef.current.style.left = `${left}px`
    menuRef.current.style.top = `${right}px`
  }, [position])

  return (
    <div ref={menuRef} className={style.ContextMenu}>
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
