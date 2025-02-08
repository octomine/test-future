import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import App from './App.tsx'
import { store } from './store'
import { messages } from './locale/messages'
import { LOCALES } from './locale/locales.ts'

const locale = LOCALES.RUSSIAN

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
      </IntlProvider>
    </Provider>
  </StrictMode>,
)
