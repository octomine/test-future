import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { RepoCard } from '../RepoCard'
import { TRepoCardProps } from '../RepoCard.types'
import { IntlProvider } from 'react-intl'
import { messages } from '../../../locale/messages'
import { LOCALES } from '../../../locale/locales.ts'

const locale = LOCALES.RUSSIAN

const props: TRepoCardProps = {
  name: 'some repo name',
  description: 'some description',
  html_url: 'some url',
  stargazers_count: 12,
  updated_at: '2024-02-15T11:48:48Z'
}

test('should render successfully', () => {
  render(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RepoCard {...props}></RepoCard>
    </IntlProvider>
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
