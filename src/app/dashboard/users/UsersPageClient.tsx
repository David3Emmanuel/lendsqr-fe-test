'use client'

import {
  Pill,
  PillColor,
  Column,
  Row,
  ContextMenuItem,
} from '@/components/Table/types'
import UsersWidgets from './widgets'
import Table from '@/components/Table'
import { useAllUsers } from '@/utils/fetch'
import { blacklistUserAction, activateUserAction } from './actions'

interface UserRow extends Row {
  id: string
  organization: string
  username: string
  email: string
  phone: string
  dateJoined: Date
  status: Pill
}

const statusColors: { [key: string]: PillColor } = {
  active: 'green',
  inactive: 'neutral',
  pending: 'yellow',
  blacklisted: 'red',
}

const columns: Column<UserRow>[] = [
  {
    key: 'organization',
    type: 'string',
    title: 'Organization',
    filterMode: 'select',
  },
  { key: 'username', type: 'string', title: 'Username' },
  { key: 'email', type: 'string', title: 'Email' },
  { key: 'phone', type: 'string', title: 'Phone' },
  { key: 'dateJoined', type: 'date', title: 'Date Joined' },
  { key: 'status', type: 'pill', title: 'Status' },
]

const contextMenu = (row: UserRow): ContextMenuItem[] => {
  const menu: ContextMenuItem[] = [
    { title: 'View Details', action: `/dashboard/user/${row.id}`, icon: 'eye' },
  ]
  if (row.status.text === 'Pending' || row.status.text === 'Blacklisted') {
    menu.push({
      title: 'Activate User',
      action: activateUserAction,
      icon: 'user-check',
    })
  }
  if (row.status.text !== 'Blacklisted') {
    menu.push({
      title: 'Blacklist User',
      action: blacklistUserAction,
      icon: 'user-xmark',
    })
  }
  return menu
}

export default function UsersPageClient() {
  const { users, loading, error } = useAllUsers()

  // TODO prettify loading, error, and empty states

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    )

  const rows: UserRow[] = users.map((user) => ({
    id: user.id,
    organization: user.organization,
    username: user.username,
    email: user.email,
    phone: user.phone,
    dateJoined: new Date(user.dateJoined),
    status: {
      text: user.status,
      color: statusColors[user.status.toLowerCase()],
    },
  }))

  const totalUsers = users.length
  const activeUsers = users.filter((user) => user.status === 'Active').length
  const usersWithLoans = users.filter(
    (user) => user.employmentDetails.loanRepayment > 0,
  ).length
  const usersWithSavings = users.filter(
    (user) => user.bankDetails.balance > 0,
  ).length

  return (
    <div>
      <h1>Users</h1>
      <UsersWidgets
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        usersWithLoans={usersWithLoans}
        usersWithSavings={usersWithSavings}
      />
      <Table
        columns={columns}
        data={rows}
        baseHref='/dashboard/user'
        contextMenu={contextMenu}
      />
    </div>
  )
}
