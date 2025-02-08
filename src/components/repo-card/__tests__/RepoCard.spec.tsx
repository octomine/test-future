import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TestProvider } from '../../../utils'
import { RepoCard } from '../RepoCard'
import { TRepoCardProps } from '../RepoCard.types'

const props: TRepoCardProps = {
  name: 'some repo name',
  description: 'some description',
  html_url: 'some url',
  stargazers_count: 12,
  updated_at: '2024-02-15T11:48:48Z'
}

test('should render successfully', () => {
  render(
    <TestProvider>
      <RepoCard {...props}></RepoCard>
    </TestProvider>
  )

  const nameElement = screen.getByText(/some repo name/i)
  expect(nameElement).toBeInTheDocument()

  const descriptionElement = screen.getByText(/some description/i)
  expect(descriptionElement).toBeInTheDocument()

  const urlElement = screen.getByText(/some url/i)
  expect(urlElement).toBeInTheDocument()

  const starsElement = screen.getByText(/12/i)
  expect(starsElement).toBeInTheDocument()

  const dateLabelElement = screen.getByText(/последнее обновление:/i)
  expect(dateLabelElement).toBeInTheDocument()

  const dateElement = screen.getByText(/15 февраля 2024/i)
  expect(dateElement).toBeInTheDocument()
})
