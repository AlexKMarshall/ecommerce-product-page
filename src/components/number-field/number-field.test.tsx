import { render, screen } from '@testing-library/react'

import { NumberField } from '.'
import { useState } from 'react'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  label: 'Number Field',
  id: 'number-field',
}

test('starts with default value of zero if not supplied', () => {
  render(<NumberField {...defaultProps} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('0')
})
test('can supply a default value', () => {
  render(<NumberField {...defaultProps} defaultValue={1} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('1')
})
test('can Increase and Decrease', () => {
  render(<NumberField {...defaultProps} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('0')
  const incButton = screen.getByRole('button', {
    name: `Increase ${defaultProps.label}`,
  })
  const decButton = screen.getByRole('button', {
    name: `Decrease ${defaultProps.label}`,
  })

  userEvent.click(incButton)
  expect(input).toHaveValue('1')
  userEvent.click(incButton)
  expect(input).toHaveValue('2')
  userEvent.click(decButton)
  expect(input).toHaveValue('1')
})
test('can edit number manually', () => {
  render(<NumberField {...defaultProps} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('0')

  userEvent.type(input, '5')
  userEvent.tab()
  expect(input).toHaveValue('5')
})
test('cannot update outside range', () => {
  render(<NumberField {...defaultProps} min={0} max={2} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('0')
  const incButton = screen.getByRole('button', {
    name: `Increase ${defaultProps.label}`,
  })
  const decButton = screen.getByRole('button', {
    name: `Decrease ${defaultProps.label}`,
  })

  userEvent.click(decButton)
  expect(input).toHaveValue('0')
  userEvent.type(input, '5')
  userEvent.tab()
  expect(input).toHaveValue('2')
  userEvent.click(incButton)
  expect(input).toHaveValue('2')
})

test('cannot enter non numeric characters', () => {
  render(<NumberField {...defaultProps} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  userEvent.type(input, 'abc')
  expect(input).toHaveValue('0')
})

function ControlledComponent() {
  const [value, setValue] = useState(0)
  return (
    <>
      <output>{value}</output>
      <NumberField {...defaultProps} value={value} onChange={setValue} />
    </>
  )
}
describe('controlled component', () => {
  test('calls onChange with value when updated', () => {
    const onChange = jest.fn()
    render(<NumberField {...defaultProps} onChange={onChange} />)

    const incButton = screen.getByRole('button', {
      name: `Increase ${defaultProps.label}`,
    })

    userEvent.click(incButton)
    expect(onChange).toHaveBeenCalledWith(1)
  })
  test('renders with value prop', () => {
    const onChange = jest.fn()
    const { rerender } = render(
      <NumberField {...defaultProps} value={1} onChange={onChange} />
    )

    expect(screen.getByRole('textbox')).toHaveValue('1')

    rerender(<NumberField {...defaultProps} value={3} onChange={onChange} />)
    expect(screen.getByRole('textbox')).toHaveValue('3')
  })
})
