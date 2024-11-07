import { TabContent } from '@/components/Tabs'
import { UserData } from '@/utils'

export default function General({ user }: { user: UserData }) {
  return (
    <TabContent tab='general'>
      <p>General Details</p>
    </TabContent>
  )
}
