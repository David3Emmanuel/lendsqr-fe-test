'use client'

import { SidebarAction } from '@/components/Sidebar'

export function SwitchOrganization() {
  return (
    <SidebarAction
      icon='work'
      title='Switch Organization'
      onClick={() => {}}
      trailingIcon='down'
    />
  )
}

export function Logout() {
  return <SidebarAction icon='logout' title='Logout' onClick={() => {}} />
}
