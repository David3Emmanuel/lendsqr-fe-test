import {
  Widget,
  WidgetGroup,
  WidgetIcon,
  WidgetTitle,
  WidgetSummary,
} from '@/components/Widget'

export default function UsersWidgets() {
  return (
    <WidgetGroup>
      <Widget>
        <WidgetIcon icon='user-group' color='pink' />
        <WidgetTitle>Users</WidgetTitle>
        <WidgetSummary>2,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='users' color='blue' />
        <WidgetTitle>Active Users</WidgetTitle>
        <WidgetSummary>2,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='file-contract' color='orange' />
        <WidgetTitle>Users with Loans</WidgetTitle>
        <WidgetSummary>12,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon icon='coins' color='red2ss' />
        <WidgetTitle>Users with Savings</WidgetTitle>
        <WidgetSummary>102,453</WidgetSummary>
      </Widget>
    </WidgetGroup>
  )
}
