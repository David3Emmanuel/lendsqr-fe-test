'use client'

import React, { useEffect } from 'react'
import { useTabContext } from './TabContext'

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
  const { setActiveTab, setDefaultTabClassName, setActiveTabClassName } =
    useTabContext()

  useEffect(() => {
    setDefaultTabClassName(defaultTabClassName)
    setActiveTabClassName(activeTabClassName)
    setActiveTab(defaultTab || '')
  }, [])

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
  const { activeTab, setActiveTab, defaultTabClassName, activeTabClassName } =
    useTabContext()

  // TODO add permalink to tab

  return (
    <div
      onClick={() => setActiveTab(tab)}
      className={`${className || defaultTabClassName} ${
        activeTab === tab ? activeClassName || activeTabClassName : ''
      }`.trim()}
    >
      {children}
    </div>
  )
}

export function TabContent({
  children,
  tab,
}: {
  children: React.ReactNode
  tab: string
}) {
  const { activeTab } = useTabContext()
  return activeTab === tab ? children : null
}

export { TabProvider } from './TabContext'
