import { Pill, PillColor, Column, Row } from '@/components/Table/types'
import UsersWidgets from './widgets'
import { Table } from '@/components/Table'
import { Metadata } from 'next'
import { UserData, getAllUsers } from '@/utils'

export const metadata: Metadata = {
  title: 'Users',
}

// TODO revalidate every minute

interface UserRow extends Row {
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
  { key: 'organization', type: 'string', title: 'Organization' },
  { key: 'username', type: 'string', title: 'Username' },
  { key: 'email', type: 'string', title: 'Email' },
  { key: 'phone', type: 'string', title: 'Phone' },
  { key: 'dateJoined', type: 'date', title: 'Date Joined' },
  { key: 'status', type: 'pill', title: 'Status' },
]

export default async function UsersPage() {
  // TODO handle loading and error states

  const rows: UserRow[] = (await getAllUsers()).map((user) => ({
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

  return (
    <div>
      <h1>Users</h1>
      <UsersWidgets />
      <Table columns={columns} data={rows} />
    </div>
  )
}
