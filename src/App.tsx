import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

import NavBar from './components/NavBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
    </ThemeProvider>
  )
}

export default App
