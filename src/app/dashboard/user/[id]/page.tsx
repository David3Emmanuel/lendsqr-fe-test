import { getUser, UserData } from '@/utils'

export default async function UserDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const user: UserData | null = await getUser(id)

  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>User Detail for {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Status: {user.status}</p>
      <p>First Name: {user.firstName}</p>
      <p>Date Joined: {user.dateJoined}</p>
      <p>Organization: {user.organization}</p>
    </div>
  )
}
