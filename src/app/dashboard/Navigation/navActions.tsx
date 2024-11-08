'use client'

import { SidebarAction } from '@/components/Sidebar'

export function SwitchOrganization() {
  return (
    <SidebarAction
      icon='briefcase'
      title='Switch Organization'
      onClick={() => {}}
      trailingIcon='chevron_down'
    />
  )
}

export function Logout() {
  return (
    <SidebarAction
      icon='right-from-bracket'
      title='Logout'
      onClick={() => {}}
    />
  )
}
