'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './style.module.scss'
import useSidebar from './useSidebar'
import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const { open, isInactive, sidebarRef, setOpen } = useSidebar()
  const sidebarChildRef = useRef<HTMLDivElement>(null)
  const resizeHandleRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(283)

  useEffect(() => {
    const sidebarChild = sidebarChildRef.current
    const resizeHandle = resizeHandleRef.current

    if (!sidebarChild || !resizeHandle) return

    let startX = 0

    const handleResizeMouseDown = (e: MouseEvent) => {
      startX = e.clientX
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'ew-resize'
      document.body.style.userSelect = 'none'
    }

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startX
      setWidth((prev) => prev + dx)
      startX = e.clientX
      e.preventDefault()
      e.stopPropagation()
    }

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    resizeHandle.addEventListener('mousedown', handleResizeMouseDown)

    return () => {
      resizeHandle.removeEventListener('mousedown', handleResizeMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <nav
      ref={sidebarRef}
      className={`${style.Sidebar} ${open ? style.open : ''} ${
        isInactive ? style.inactive : ''
      }`}
    >
      <Button
        className={`${style.sidebarIcon} ${isInactive ? style.inactive : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
      </Button>
      <div className={style.child} ref={sidebarChildRef} style={{ width }}>
        {children}
      </div>
      <div className={style.resizeHandle} ref={resizeHandleRef} />
    </nav>
  )
}

export function SidebarSection({
  children,
  title,
  isDefault,
}: {
  children: React.ReactNode
  title: string
  isDefault?: boolean
}) {
  const [open, setOpen] = useState(isDefault)

  return (
    <div className={style.SidebarSection}>
      <h3 className={style.title} onClick={() => setOpen((prev) => !prev)}>
        {title}
      </h3>
      <div className={`${style.child} ${open ? style.open : ''}`}>
        {children}
      </div>
    </div>
  )
}

export function SidebarDivider() {
  return <div className={style.SidebarDivider} />
}

export function SidebarFooter({ children }: { children: React.ReactNode }) {
  return <p className={style.SidebarFooter}>{children}</p>
}

export function SidebarAction({
  title,
  onClick,
  icon,
  trailingIcon,
}: {
  title: string
  onClick: () => void
  icon: string
  trailingIcon?: string
}) {
  return (
    <button className={style.SidebarAction} onClick={onClick}>
      <i className={`fa fa-${icon} ${style.icon}`} />
      <h2>{title}</h2>
      {trailingIcon && (
        <i className={`fa-solid fa-${trailingIcon} ${style.icon}`} />
      )}
    </button>
  )
}

export function SidebarLink({
  title,
  href,
  icon,
  trailingIcon,
}: {
  title: string
  href: string
  icon: string
  trailingIcon?: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={`${style.SidebarLink} ${isActive ? style.active : ''}`}
      href={href}
    >
      <i className={`fa-solid fa-${icon} ${style.icon}`} />
      <h2>{title}</h2>
      {trailingIcon && (
        <i className={`fa-solid fa-${trailingIcon} ${style.icon}`} />
      )}
    </Link>
  )
}
