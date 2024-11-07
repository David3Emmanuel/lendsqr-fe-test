import { Metadata } from 'next'
import UsersPageClient from './UsersPageClient'

export const metadata: Metadata = {
  title: 'Users',
}

export default function UsersPage() {
  return <UsersPageClient />
}
