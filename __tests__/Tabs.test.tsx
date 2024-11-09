import { Tab, TabContent, TabGroup, TabProvider } from '@/components/Tabs'
import { screen } from '@testing-library/dom'
import { act, render } from '@testing-library/react'

describe('Tab component', () => {
  it('renders tab content', () => {
    render(<TestTabs />)

    expect(screen.getByText('Tab Content 1')).toBeInTheDocument()
  })

  it('switches tabs', async () => {
    render(<TestTabs />)
    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')
    act(() => tab2.click())
    expect(screen.getByText('Tab Content 2')).toBeInTheDocument()
    act(() => tab1.click())
    expect(screen.getByText('Tab Content 1')).toBeInTheDocument()
  })

  it('does not render non-existent tab content', () => {
    render(<TestTabs />)
    expect(screen.queryByText('Tab Content 3')).not.toBeInTheDocument()
  })
})

function TestTabs() {
  return (
    <TabProvider>
      <TabGroup defaultTab='1'>
        <Tab tab='1'>Tab 1</Tab>
        <Tab tab='2'>Tab 2</Tab>
      </TabGroup>
      <TabContent tab='1'>Tab Content 1</TabContent>
      <TabContent tab='2'>Tab Content 2</TabContent>
      <TabContent tab='3'>Tab Content 3</TabContent>
    </TabProvider>
  )
}
