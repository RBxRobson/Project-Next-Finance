import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/global-styles'

import Routes from './routes'
import {
  useGetHomeQuery,
  useGetAboutQuery,
  useGetAuthQuery,
  useGetCareersQuery,
  useGetSecurityQuery
} from './services/api'

function App() {
  const { isLoading: isHomeLoading } = useGetHomeQuery()
  const { isLoading: isAuthLoading } = useGetAuthQuery()
  const { isLoading: isCareersLoading } = useGetCareersQuery()
  const { isLoading: isAboutLoading } = useGetAboutQuery()
  const { isLoading: isSecurityLoading } = useGetSecurityQuery()

  const isLoading =
    isHomeLoading ||
    isAuthLoading ||
    isCareersLoading ||
    isAboutLoading ||
    isSecurityLoading

  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <div>Carregando...</div>
      </>
    )
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
