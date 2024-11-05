import {
  Widget,
  WidgetGroup,
  WidgetIcon,
  WidgetSummary,
  WidgetTitle,
} from '@/components/Widget'

export default function UsersPage() {
  // TODO fetch from API

  return (
    <div>
      <h1>Users</h1>
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
    </div>
  )
}
