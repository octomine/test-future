import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestProvider } from '@/utils'
import { SearchInput } from '../SearchInput'

const renderComponent = () => render(
  <TestProvider>
    <SearchInput></SearchInput>
  </TestProvider>
)

describe('should render successfully', () => {
  test('should show placeholder', () => {
    renderComponent()

    const inputElement = screen.getByPlaceholderText(/Введите название репозитория/i)
    expect(inputElement).toBeInTheDocument()
  })

  test('should show value on input', () => {
    renderComponent()

    const inputElement = screen.getByPlaceholderText(/Введите название репозитория/i)
    userEvent.type(inputElement, 'a')

    waitFor(() => {
      expect(inputElement).toHaveValue('a')
    })
  })
})
