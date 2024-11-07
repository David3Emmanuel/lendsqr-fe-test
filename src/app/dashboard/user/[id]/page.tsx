import { getUser } from '@/utils'
import Link from 'next/link'
import style from './style.module.scss'
import Button from '@/components/Button'
import { TabProvider } from '@/components/Tabs'
import UserHeader from './UserHeader'

// Tab contents
import General from './tabs/General'
import Documents from './tabs/Documents'
import Bank from './tabs/Bank'
import Loans from './tabs/Loans'
import Savings from './tabs/Savings'
import App from './tabs/App'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await getUser(id)

  return {
    title: user?.username,
    description: `User details for ${user?.username}`,
  }
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await getUser(id)

  if (!user)
    return (
      <div>
        <Link href='/dashboard/users' className={style.backToUsers}>
          <i className='fa-solid fa-arrow-left' />
          Back to Users
        </Link>
        <div className={style.titleRow}>
          <h1>User not Found</h1>
        </div>
      </div>
    )

  return (
    <div>
      <Link href='/dashboard/users' className={style.backToUsers}>
        <i className='fa-solid fa-arrow-left' />
        Back to Users
      </Link>
      <div className={style.titleRow}>
        <h1>User Details</h1>
        {/* TODO show actions based on user status */}
        <div className={style.actions}>
          <Button className={style.blacklist}>Blacklist User</Button>
          <Button className={style.activate}>Activate User</Button>
        </div>
      </div>
      <TabProvider>
        <UserHeader user={user} />
        <div className={style.tabContent}>
          <General user={user} />
          <Documents user={user} />
          <Bank user={user} />
          <Loans user={user} />
          <Savings user={user} />
          <App user={user} />
        </div>
      </TabProvider>
    </div>
  )
}
