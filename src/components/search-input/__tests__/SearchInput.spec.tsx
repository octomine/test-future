import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestProvider } from '@/utils'
import { SearchInput } from '../SearchInput'

const renderComponent = (value = '', setValue = () => { }) => render(
  <TestProvider>
    <SearchInput value={value} setValue={setValue}></SearchInput>
  </TestProvider>
)

describe('should render successfully', () => {
  test('should show label', () => {
    renderComponent('value')

    const inputElement = screen.getByPlaceholderText(/Введите название репозитория/i)
    expect(inputElement).toHaveValue('value')
  })

  test('should fire setValue on change', () => {
    const setValue = jest.fn;
    renderComponent('', setValue)

    const inputElement = screen.getByPlaceholderText(/Введите название репозитория/i)
    userEvent.type(inputElement, 'a')

    waitFor(() => {
      expect(setValue).toHaveBeenCalled()
    })
  })
})
