import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies the correct class names', () => {
    render(
      <Button className='custom-class' secondary>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('secondary')
  })

  it('handles onClick event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('sets the correct type attribute', () => {
    render(<Button type='submit'>Submit</Button>)
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit')
  })

  it('sets the correct aria-label attribute', () => {
    render(<Button ariaLabel='button-label'>Click me</Button>)
    expect(screen.getByLabelText('button-label')).toBeInTheDocument()
  })
})
