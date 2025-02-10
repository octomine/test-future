import { IntlProvider } from 'react-intl'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { messages } from '../../locale/messages'
import { LOCALES } from '../../locale/locales.ts'
import { store } from '@/store/store.ts'

const locale = LOCALES.RUSSIAN

export const TestProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  </Provider>
)
