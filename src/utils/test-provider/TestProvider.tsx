import { IntlProvider } from 'react-intl'

import { messages } from '../../locale/messages'
import { LOCALES } from '../../locale/locales.ts'
import { FC, PropsWithChildren } from 'react'

const locale = LOCALES.RUSSIAN

export const TestProvider: FC<PropsWithChildren> = ({ children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
)
