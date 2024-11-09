import { render, screen, fireEvent } from '@testing-library/react'
import Input from '@/components/Input'

describe('Input component', () => {
  it('renders input with placeholder', () => {
    render(<Input type='text' placeholder='Enter text' />)
    const inputElement = screen.getByPlaceholderText('Enter text')
    expect(inputElement).toBeInTheDocument()
  })

  it('toggles password visibility', () => {
    render(<Input type='password' placeholder='Enter password' />)
    const inputElement = screen.getByPlaceholderText('Enter password')
    const toggleButton = screen.getByText('Show')

    // Initially, the input type should be password
    expect(inputElement).toHaveAttribute('type', 'password')

    // Click the toggle button to show the password
    fireEvent.click(toggleButton)
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(toggleButton).toHaveTextContent('Hide')

    // Click the toggle button again to hide the password
    fireEvent.click(toggleButton)
    expect(inputElement).toHaveAttribute('type', 'password')
    expect(toggleButton).toHaveTextContent('Show')
  })

  it('calls setValue on input change', () => {
    const setValueMock = jest.fn()
    render(
      <Input type='text' placeholder='Enter text' setValue={setValueMock} />,
    )
    const inputElement = screen.getByPlaceholderText('Enter text')

    fireEvent.change(inputElement, { target: { value: 'test' } })
    expect(setValueMock).toHaveBeenCalledWith('test')
  })

  it('renders search button for search input', () => {
    render(<Input type='search' placeholder='Search' />)
    const searchButton = screen.getByLabelText('search')
    expect(searchButton).toBeInTheDocument()
  })
})
