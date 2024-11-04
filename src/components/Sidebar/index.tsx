'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useState } from 'react'
import Button from '../Button'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <Button onClick={() => setOpen((prev) => !prev)}>?</Button>
      <div>{children}</div>
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
    <div>
      <h3 onClick={() => setOpen((prev) => !prev)}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

export function SidebarDivider() {
  return <div />
}

export function SidebarFooter({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
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
    <button onClick={onClick}>
      <span>?</span>
      <h2>{title}</h2>
      {trailingIcon && <span>?</span>}
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
    <Link href={href}>
      <span>?</span>
      <h2>{title}</h2>
      {trailingIcon && <span>?</span>}
    </Link>
  )
}
