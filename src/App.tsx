import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

import Routes from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
