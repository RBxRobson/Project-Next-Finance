import { AnimatePresence } from 'framer-motion'
import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom'

import MainContainer from '../components/atoms/MainContainer'
import { CtaSection, Footer } from '../components/organisms'
import Header from '../components/templates/Header'
import { About, Auth, Careers, Home, Security } from '../pages'

type LayoutProps = {
  children: JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <>
          {children}
          <CtaSection />
        </>
      </MainContainer>
      <Footer />
    </>
  )
}

const Routes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <RouterRoutes location={location} key={location.pathname}>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <Layout>
              <RouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/joinUs" element={<Careers />} />
                <Route path="/about" element={<About />} />
                <Route path="/security" element={<Security />} />
              </RouterRoutes>
            </Layout>
          }
        />
      </RouterRoutes>
    </AnimatePresence>
  )
}

export default Routes
