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
        <WidgetIcon>people</WidgetIcon>
        <WidgetTitle>Users</WidgetTitle>
        <WidgetSummary>2,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon>people</WidgetIcon>
        <WidgetTitle>Active Users</WidgetTitle>
        <WidgetSummary>2,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon>people</WidgetIcon>
        <WidgetTitle>Users with Loans</WidgetTitle>
        <WidgetSummary>12,453</WidgetSummary>
      </Widget>
      <Widget>
        <WidgetIcon>people</WidgetIcon>
        <WidgetTitle>Users with Savings</WidgetTitle>
        <WidgetSummary>102,453</WidgetSummary>
      </Widget>
    </WidgetGroup>
  )
}
