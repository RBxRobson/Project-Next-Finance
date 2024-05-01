import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global-styles'
import theme from './styles/themes'

import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import OurProducts from './components/OurProducts'
import UseCases from './components/UseCases'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <OurProducts />
      <UseCases />
      <CtaSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App
