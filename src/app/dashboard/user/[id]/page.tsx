import { getUser } from '@/utils'
import Link from 'next/link'
import style from './style.module.scss'
import Button from '@/components/Button'
import { TabContent, TabProvider } from '@/components/Tabs'
import UserHeader from './UserHeader'

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

  if (!user) return <div>User not found</div>

  return (
    <div>
      <Link href='/dashboard/users' className={style.backToUsers}>
        <i className='fa-solid fa-arrow-left' />
        Back to Users
      </Link>
      <div className={style.titleRow}>
        <h1>User Details</h1>
        <div className={style.actions}>
          <Button className={style.blacklist}>Blacklist User</Button>
          <Button className={style.activate}>Activate User</Button>
        </div>
      </div>
      <TabProvider>
        <UserHeader user={user} />
        <div className={style.tabContent}>
          <TabContent tab='general'>
            <p>General Details</p>
          </TabContent>
          <TabContent tab='documents'>
            <p>Documents</p>
          </TabContent>
          <TabContent tab='bank'>
            <p>Bank Details</p>
          </TabContent>
          <TabContent tab='loans'>
            <p>Loans</p>
          </TabContent>
          <TabContent tab='savings'>
            <p>Savings</p>
          </TabContent>
          <TabContent tab='app'>
            <p>App and System</p>
          </TabContent>
        </div>
      </TabProvider>
    </div>
  )
}
