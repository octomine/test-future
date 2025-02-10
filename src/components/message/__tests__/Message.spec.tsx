import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Message } from '../Message'

test('should render message', () => {
  render(<Message message='message'></Message>)

  const element = screen.getByText(/message/i)
  expect(element).toBeInTheDocument()
})
