'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './style.module.scss'
import { useState } from 'react'
import Button from '@/components/Button'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  // TODO hide sidebar onblur

  return (
    <nav className={`${style.Sidebar} ${open ? style.open : ''}`}>
      <Button
        className={style.sidebarIcon}
        onClick={() => setOpen((prev) => !prev)}
      >
        ?
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
      <span className={style.icon}>?</span>
      <h2>{title}</h2>
      {trailingIcon && <span className={style.icon}>?</span>}
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
      <span className={style.icon}>?</span>
      <h2>{title}</h2>
      {trailingIcon && <span className={style.icon}>?</span>}
    </Link>
  )
}
