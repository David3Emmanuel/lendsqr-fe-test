import { Pill, Column, Row } from '@/components/Table/types'
import UsersWidgets from './widgets'
import { Table } from '@/components/Table'

interface UserRow extends Row {
  organization: string
  username: string
  email: string
  phone: string
  dateJoined: Date
  status: Pill
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
  // TODO fetch from API

  const rows: UserRow[] = [
    {
      organization: 'Lendsqr',
      username: 'Adedeji',
      email: 'adedeji@lendsqr.com',
      phone: '08078903721',
      dateJoined: new Date(2020, 5, 15, 10),
      status: { color: 'neutral', text: 'Inactive' },
    },
    {
      organization: 'Irorun',
      username: 'Debby Ogana',
      email: 'debby2@irorun.com',
      phone: '08160780928',
      dateJoined: new Date(2020, 6, 30, 10),
      status: { color: 'yellow', text: 'Pending' },
    },
  ]

  return (
    <div>
      <h1>Users</h1>
      <UsersWidgets />
      <Table columns={columns} data={rows} />
    </div>
  )
}
