import {
  Sidebar,
  SidebarDivider,
  SidebarLink,
  SidebarSection,
  SidebarFooter,
} from '@/components/Sidebar'
import { Logout, SwitchOrganization } from './navActions'

export default function Navigation() {
  // TODO add optional dropdown to sidebar action

  return (
    <Sidebar>
      <SwitchOrganization />
      <SidebarLink icon='home' title='Dashboard' href='/dashboard' />
      <SidebarSection title='Customers'>
        <SidebarLink icon='people' title='Users' href='/dashboard/users' />
        <SidebarLink icon='people' title='Guarantors' href='/dashboard' />
        <SidebarLink icon='money' title='Loans' href='/dashboard' />
        <SidebarLink
          icon='handshake'
          title='Decision Models'
          href='/dashboard'
        />
        <SidebarLink icon='savings' title='Savings' href='/dashboard' />
        <SidebarLink icon='money' title='Loan Requests' href='/dashboard' />
        <SidebarLink icon='check' title='Whitelist' href='/dashboard' />
        <SidebarLink icon='cross_out' title='Karma' href='/dashboard' />
      </SidebarSection>
      <SidebarSection title='Businesses'>
        <SidebarLink icon='business' title='Organization' href='/dashboard' />
        <SidebarLink icon='business' title='Loan Products' href='/dashboard' />
        <SidebarLink
          icon='business'
          title='Savings Products'
          href='/dashboard'
        />
        <SidebarLink
          icon='business'
          title='Fees and Charges'
          href='/dashboard'
        />
        <SidebarLink icon='business' title='Transactions' href='/dashboard' />
        <SidebarLink icon='business' title='Services' href='/dashboard' />
        <SidebarLink
          icon='business'
          title='Service Account'
          href='/dashboard'
        />
        <SidebarLink icon='business' title='Settlements' href='/dashboard' />
        <SidebarLink icon='business' title='Reports' href='/dashboard' />
      </SidebarSection>
      <SidebarSection title='Settings'>
        <SidebarLink icon='settings' title='Preferences' href='/dashboard' />
        <SidebarLink
          icon='settings'
          title='Fees and Pricing'
          href='/dashboard'
        />
        <SidebarLink icon='settings' title='Audit Logs' href='/dashboard' />
        <SidebarLink
          icon='settings'
          title='Systems Messages'
          href='/dashboard'
        />
      </SidebarSection>
      <SidebarDivider />
      <Logout />
      <SidebarFooter>v1.2.0</SidebarFooter>
    </Sidebar>
  )
}
