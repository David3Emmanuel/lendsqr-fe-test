'use client'

import React, { createContext, useContext, useState } from 'react'

const TabContext = createContext<
  | {
      activeTab: string
      setActiveTab: (tab: string) => void
      defaultTabClassName?: string
      setDefaultTabClassName: (className?: string) => void
      activeTabClassName?: string
      setActiveTabClassName: (className?: string) => void
    }
  | undefined
>(undefined)

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<string>('')
  const [defaultTabClassName, setDefaultTabClassName] = useState<
    string | undefined
  >()
  const [activeTabClassName, setActiveTabClassName] = useState<
    string | undefined
  >()
  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        defaultTabClassName,
        setDefaultTabClassName,
        activeTabClassName,
        setActiveTabClassName,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

export function useTabContext() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider')
  }
  return context
}
