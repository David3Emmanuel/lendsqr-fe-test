'use client'

import Link from 'next/link'
import style from './style.module.scss'
import Button from '@/components/Button'
import { TabProvider } from '@/components/Tabs'
import UserHeader from './UserHeader'
import General from './tabs/General'
import Documents from './tabs/Documents'
import Bank from './tabs/Bank'
import Loans from './tabs/Loans'
import Savings from './tabs/Savings'
import App from './tabs/App'
import { useUser } from '@/utils/fetch'

const BackToUsersLink = () => (
  <Link href='/dashboard/users' className={style.backToUsers}>
    <i className='fa-solid fa-arrow-left' />
    Back to Users
  </Link>
)

const TitleRow = ({ title }: { title: string }) => (
  <div className={style.titleRow}>
    <h1>{title}</h1>
  </div>
)

export default function UserDetailsPageClient({ id }: { id: string }) {
  const { user, loading, error } = useUser(id)

  if (loading)
    return (
      <div>
        <BackToUsersLink />
        <TitleRow title='Loading...' />
      </div>
    )

  if (error)
    return (
      <div>
        <BackToUsersLink />
        <TitleRow title={`Error: ${error.message}`} />
      </div>
    )

  if (!user)
    return (
      <div>
        <BackToUsersLink />
        <TitleRow title='User not Found' />
      </div>
    )

  document.title = `${user.username} | Dashboard`

  return (
    <div>
      <meta name='description' content={`User details for ${user.username}`} />
      <BackToUsersLink />
      <div className={style.titleRow}>
        <h1>User Details</h1>
        <div className={style.actions}>
          <h3>Status: {user.status}</h3>
          {(user.status === 'Pending' || user.status === 'Blacklisted') && (
            <Button className={style.activate}>Activate User</Button>
          )}
          {user.status !== 'Blacklisted' && (
            <Button className={style.blacklist}>Blacklist User</Button>
          )}
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
