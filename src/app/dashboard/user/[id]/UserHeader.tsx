import { UserData } from '@/utils'
import { Tab, TabGroup } from '@/components/Tabs'
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
          <p>User&apos;s Tier</p>
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
      <TabGroup
        className={style.tabs}
        defaultTabClassName={style.tab}
        activeTabClassName={style.active}
        defaultTab='general'
      >
        <Tab tab='general'>
          <p>General Details</p>
        </Tab>
        <Tab tab='documents'>
          <p>Documents</p>
        </Tab>
        <Tab tab='bank'>
          <p>Bank Details</p>
        </Tab>
        <Tab tab='loans'>
          <p>Loans</p>
        </Tab>
        <Tab tab='savings'>
          <p>Savings</p>
        </Tab>
        <Tab tab='app'>
          <p>App and System</p>
        </Tab>
      </TabGroup>
    </div>
  )
}
