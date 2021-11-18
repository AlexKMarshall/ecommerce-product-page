import { render, screen } from '@testing-library/react'

import { NumberField } from '.'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  label: 'Number Field',
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
test('can increment and decrement', () => {
  render(<NumberField {...defaultProps} />)

  const input = screen.getByRole('textbox', { name: defaultProps.label })
  expect(input).toHaveValue('0')
  const incButton = screen.getByRole('button', {
    name: `Increment ${defaultProps.label}`,
  })
  const decButton = screen.getByRole('button', {
    name: `Decrement ${defaultProps.label}`,
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
