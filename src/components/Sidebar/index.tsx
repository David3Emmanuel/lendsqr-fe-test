'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './style.module.scss'
import useSidebar from './useSidebar'
import Button from '@/components/Button'
import { useState } from 'react'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const { open, isInactive, sidebarRef, setOpen } = useSidebar()

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
      <div className={style.child}>{children}</div>
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
