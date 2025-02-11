import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { setIsLoading, store } from '@/store'
import { Message } from '../Message'
import { TestProvider } from '@/utils'

test('should render isLoading', () => {
  render(
    <TestProvider>
      <Message></Message>
    </TestProvider>
  )

  store.dispatch(setIsLoading(true))

  waitFor(() => {
    const element = screen.getByText(/загружается.../i)
    expect(element).toBeInTheDocument()
  })
})
