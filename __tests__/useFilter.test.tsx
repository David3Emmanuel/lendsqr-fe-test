import useFilter from '@/components/Table/Filter/useFilter'
import { useState } from 'react'
import { Column, Row } from '@/components/Table/types'
import { fireEvent, render, screen } from '@testing-library/react'

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

function TestFilter({ data }: { data: TestData[] }) {
  const [filter, setFilter] = useState({})
  const { filteredData } = useFilter(data, columns, filter, jest.fn())

  const applyFilter = () => {
    setFilter({ name: 'John Doe' })
  }

  return (
    <div id='test-filter'>
      <button onClick={applyFilter}>Apply Filter</button>
      {filteredData.map((data, i) => (
        <span key={i}>Result</span>
      ))}
    </div>
  )
}

describe('useFilter hook', () => {
  it('filters data based on filter values', () => {
    render(<TestFilter data={data} />)
    const getResults = () => {
      const results = screen.getAllByText('Result')
      return results.length
    }

    expect(getResults()).toStrictEqual(2)
    const applyFilter = screen.getByRole('button')
    fireEvent.click(applyFilter)
    expect(getResults()).toStrictEqual(1)
  })
})
