import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { setError, setIsLoading, store } from '@/store'
import { Message } from '../Message'
import { TestProvider } from '@/utils'

const renderComponent = () => render(
  <TestProvider>
    <Message></Message>
  </TestProvider>
)

test('should show isLoading', () => {
  renderComponent()
  store.dispatch(setIsLoading(true))

  waitFor(() => {
    const element = screen.getByText(/загружается.../i)
    expect(element).toBeInTheDocument()
  })
})

test('should show error', () => {
  renderComponent()
  store.dispatch(setError('some error'))

  waitFor(() => {
    const element = screen.getByText(/some error/i)
    expect(element).toBeInTheDocument()
  })
})
