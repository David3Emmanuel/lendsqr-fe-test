import {
  Sidebar,
  SidebarDivider,
  SidebarLink,
  SidebarSection,
  SidebarFooter,
} from '@/components/Sidebar'
import { Logout, SwitchOrganization } from './navActions'

export default function Navigation() {
  return (
    <Sidebar>
      <SwitchOrganization />
      <SidebarLink icon='house' title='Dashboard' href='/dashboard' />
      <SidebarSection title='Customers'>
        <SidebarLink icon='user-group' title='Users' href='/dashboard/users' />
        <SidebarLink icon='users' title='Guarantors' href='/dashboard' />
        <SidebarLink icon='sack-dollar' title='Loans' href='/dashboard' />
        <SidebarLink
          icon='handshake'
          title='Decision Models'
          href='/dashboard'
        />
        <SidebarLink icon='piggy-bank' title='Savings' href='/dashboard' />
        <SidebarLink
          icon='hand-holding-dollar'
          title='Loan Requests'
          href='/dashboard'
        />
        <SidebarLink icon='user-check' title='Whitelist' href='/dashboard' />
        <SidebarLink icon='user-xmark' title='Karma' href='/dashboard' />
      </SidebarSection>
      <SidebarSection title='Businesses'>
        <SidebarLink icon='briefcase' title='Organization' href='/dashboard' />
        <SidebarLink
          icon='hand-holding-dollar'
          title='Loan Products'
          href='/dashboard'
        />
        <SidebarLink
          icon='building-columns'
          title='Savings Products'
          href='/dashboard'
        />
        <SidebarLink icon='coins' title='Fees and Charges' href='/dashboard' />
        <SidebarLink icon='right-left' title='Transactions' href='/dashboard' />
        <SidebarLink icon='user-nurse' title='Services' href='/dashboard' />
        <SidebarLink
          icon='user-gear'
          title='Service Account'
          href='/dashboard'
        />
        <SidebarLink icon='scroll' title='Settlements' href='/dashboard' />
        <SidebarLink icon='chart-column' title='Reports' href='/dashboard' />
      </SidebarSection>
      <SidebarSection title='Settings'>
        <SidebarLink icon='sliders' title='Preferences' href='/dashboard' />
        <SidebarLink
          icon='percent'
          title='Fees and Pricing'
          href='/dashboard'
        />
        <SidebarLink
          icon='clipboard-list'
          title='Audit Logs'
          href='/dashboard'
        />
        <SidebarLink icon='gear' title='Systems Messages' href='/dashboard' />
      </SidebarSection>
      <SidebarDivider />
      <Logout />
      <SidebarFooter>v1.2.0</SidebarFooter>
    </Sidebar>
  )
}
