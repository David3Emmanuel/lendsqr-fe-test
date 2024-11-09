import { render, screen } from '@testing-library/react'
import Table from '@/components/Table'
import { Column, Row } from '@/components/Table/types'

interface TestData extends Row {
  name: string
  age: number
}

const columns: Column<TestData>[] = [
  { key: 'name', title: 'Name', type: 'string' },
  { key: 'age', title: 'Age', type: 'number' },
]

const data: TestData[] = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Doe', age: 25 },
]

describe('Table component', () => {
  it('renders table headers', () => {
    render(<Table columns={columns} data={data} />)
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(columns.length)
  })

  it('renders table rows', () => {
    render(<Table columns={columns} data={data} />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(data.length + 1) // +1 for the header row
  })
})
