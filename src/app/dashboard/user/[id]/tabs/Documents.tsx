import { TabContent } from '@/components/Tabs'
import UserData from '@/utils/UserData'

export default function Documents({}: { user: UserData }) {
  return (
    <TabContent tab='documents'>
      <h2>Documents</h2>
    </TabContent>
  )
}
