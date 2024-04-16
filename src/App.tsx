import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

import Hero from './components/Hero'
import NavBar from './components/NavBar'
import OurProducts from './components/OurProducts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <OurProducts />
    </ThemeProvider>
  )
}

export default App
