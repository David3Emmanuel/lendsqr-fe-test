import { TabContent } from '@/components/Tabs'
import { UserData } from '@/utils'

export default function App({}: { user: UserData }) {
  return (
    <TabContent tab='app'>
      <h2>App and System</h2>
    </TabContent>
  )
}
