import Link from 'next/link'

import CompoundLogo from '@/components/CompoundLogo'
import Input from '@/components/Input'
import Notifications from '@/components/Notifications'
import Profile from '@/components/Profile'

import style from './style.module.scss'

export default function Header() {
  return (
    <header className={style.Header}>
      <CompoundLogo className={style.CompoundLogo} />
      <div className={style.headerContainer}>
        <Input
          type='search'
          placeholder='Search for anything'
          className={style.Input}
        />
        <div className={style.actions}>
          <Link className={style.docs} href='/'>
            Docs
          </Link>
          <Notifications />
          <Profile expanded className={style.Profile} />
        </div>
      </div>
    </header>
  )
}
