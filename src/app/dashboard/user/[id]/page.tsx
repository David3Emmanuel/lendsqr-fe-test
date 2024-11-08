import { Metadata } from 'next'
import UserDetailsPageClient from './UserDetailsPageClient'

export const metadata: Metadata = {
  title: 'User Details',
  description: 'User details page',
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return <UserDetailsPageClient id={(await params).id} />
}
