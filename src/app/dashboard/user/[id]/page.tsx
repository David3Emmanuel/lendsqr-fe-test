import { Metadata } from 'next'
import UserDetailsPageClient from './UserDetailsPageClient'

export const metadata: Metadata = {
  title: 'User Details',
}

// TODO set title client-side

export default function UserDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  return <UserDetailsPageClient id={params.id} />
}
