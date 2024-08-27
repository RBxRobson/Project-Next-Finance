import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Loader } from './components/organisms'
import Routes from './routes'
import {
  useGetHomeQuery,
  useGetAboutQuery,
  useGetAuthQuery,
  useGetCareersQuery,
  useGetSecurityQuery
} from './services/api'

function App() {
  const [showLoader, setShowLoader] = useState(true)
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

  useEffect(() => {
    const minLoadingTime = 2500

    if (isLoading) {
      setShowLoader(true)
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, minLoadingTime)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (showLoader) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
