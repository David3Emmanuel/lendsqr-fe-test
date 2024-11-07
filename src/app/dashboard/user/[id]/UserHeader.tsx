import { UserData } from '@/utils'
import style from './style.module.scss'

export default function UserHeader({ user }: { user: UserData }) {
  return (
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
  )
}
