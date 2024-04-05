import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

import Counter from './components/Counter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Counter label="Contador em" primary />
    </ThemeProvider>
  )
}

export default App
