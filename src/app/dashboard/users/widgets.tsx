import {
  Widget,
  WidgetGroup,
  WidgetIcon,
  WidgetTitle,
  WidgetSummary,
} from '@/components/Widget'

interface UsersWidgetsProps {
  totalUsers: number
  activeUsers: number
  usersWithLoans: number
  usersWithSavings: number
}

export default function UsersWidgets({
  totalUsers,
  activeUsers,
  usersWithLoans,
  usersWithSavings,
}: UsersWidgetsProps) {
  return (
    <WidgetGroup>
      <Widget>
        <WidgetIcon icon='user-group' color='pink' />
        <WidgetTitle>Users</WidgetTitle>
        <WidgetSummary>{totalUsers}</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='users' color='blue' />
        <WidgetTitle>Active Users</WidgetTitle>
        <WidgetSummary>{activeUsers}</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='file-contract' color='orange' />
        <WidgetTitle>Users with Loans</WidgetTitle>
        <WidgetSummary>{usersWithLoans}</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='coins' color='red2' />
        <WidgetTitle>Users with Savings</WidgetTitle>
        <WidgetSummary>{usersWithSavings}</WidgetSummary>
      </Widget>
    </WidgetGroup>
  )
}
