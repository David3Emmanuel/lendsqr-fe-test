import Header from './Header'
import Navigation from './Navigation'

import style from './style.module.scss'

export const metadata = {
  title: 'Overview',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={style.DashboardLayout}>
      <Header />
      <div className={style.dashboard}>
        <Navigation />
        <main>{children}</main>
      </div>
    </div>
  )
}
