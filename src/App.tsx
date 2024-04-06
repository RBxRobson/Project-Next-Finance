import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
