'use client'

import React, { useEffect } from 'react'
import { useTabContext } from './TabContext'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export function TabGroup({
  children,
  className,
  defaultTabClassName,
  activeTabClassName,
  defaultTab,
}: {
  children: React.ReactNode
  className?: string
  defaultTabClassName?: string
  activeTabClassName?: string
  defaultTab?: string
}) {
  const { setDefaultTab, setDefaultTabClassName, setActiveTabClassName } =
    useTabContext()

  useEffect(() => {
    setDefaultTab(defaultTab)
    setDefaultTabClassName(defaultTabClassName)
    setActiveTabClassName(activeTabClassName)
  }, [
    activeTabClassName,
    defaultTab,
    defaultTabClassName,
    setActiveTabClassName,
    setDefaultTab,
    setDefaultTabClassName,
  ])

  return <div className={className}>{children}</div>
}

export function Tab({
  children,
  tab,
  className,
  activeClassName,
}: {
  children: React.ReactNode
  tab: string
  className?: string
  activeClassName?: string
}) {
  const { defaultTab, defaultTabClassName, activeTabClassName } =
    useTabContext()
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const activeTab = searchParams.get('tab') || defaultTab

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('tab', tab)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Link
      href={`?tab=${tab}`}
      onClick={handleClick}
      className={`${className || defaultTabClassName} ${
        activeTab === tab ? activeClassName || activeTabClassName : ''
      }`.trim()}
    >
      {children}
    </Link>
  )
}

export function TabContent({
  children,
  tab,
}: {
  children: React.ReactNode
  tab: string
}) {
  const activeTab = useSearchParams().get('tab')
  const { defaultTab } = useTabContext()
  return (activeTab || defaultTab) === tab ? children : null
}

export { TabProvider } from './TabContext'
