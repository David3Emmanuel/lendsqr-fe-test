import { TabContent } from '@/components/Tabs'
import { UserData } from '@/utils'

export default function Loans({}: { user: UserData }) {
  return (
    <TabContent tab='loans'>
      <h2>Loans</h2>
    </TabContent>
  )
}
