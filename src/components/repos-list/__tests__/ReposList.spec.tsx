import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'

import { TestProvider } from '@/utils'
import { store } from '@/store'
import { setName } from '@/store/slices'
import { getRepos } from '@/store/thunks'
import { ReposList } from '../ReposList'

const renderComponent = () => render(
  <TestProvider>
    <ReposList></ReposList>
  </TestProvider>
)

describe('should render successfully', () => {
  test('should show empty message', () => {
    renderComponent()

    const emptyMessage = screen.getByText(/ничего не найдено/i)
    expect(emptyMessage).toBeInTheDocument()
  })

  test('should show list', () => {
    const mockData = [{
      id: 1,
      name: 'some repo name',
      description: 'some description',
      html_url: 'some url',
      stargazers_count: 12,
      updated_at: '2024-02-15T11:48:48Z'
    }];
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    });

    store.dispatch(setName('name'))
    store.dispatch(getRepos())

    waitFor(() => {
      const element = screen.getByText(/some repo name/i)
      expect(element).toBeInTheDocument()
    })
  })
})
