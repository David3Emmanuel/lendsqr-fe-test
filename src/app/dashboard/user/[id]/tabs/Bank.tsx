import { TabContent } from '@/components/Tabs'
import UserData from '@/utils/UserData'

export default function Bank({}: { user: UserData }) {
  return (
    <TabContent tab='bank'>
      <h2>Bank Details</h2>
    </TabContent>
  )
}
