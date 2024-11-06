import { getUser, UserData } from '@/utils'
import Link from 'next/link'
import style from './style.module.scss'
import Button from '@/components/Button'

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user: UserData | null = await getUser(id)

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
      <div className={style.userHeader}>
        <div className={style.basicInfo}>
          <div className={style.avatar}>
            <i className='fa-solid fa-user' />
          </div>
          <div>
            <h2>{user.username}</h2>
            <p>{user.id}</p>
          </div>
          <div className={style.divider} />
          <div className={style.tier}>
            <p>User's Tier</p>
            {/* TODO add stars */}
            <p>Tier {user.tier}</p>
          </div>
          <div className={style.divider} />
          <div className={style.bank}>
            <h2>
              {user.bankDetails.balance.toLocaleString(undefined, {
                style: 'currency',
                currency: 'NGN',
              })}
            </h2>
            <h6>
              {user.bankDetails.accountNumber}/{user.bankDetails.bankName}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
