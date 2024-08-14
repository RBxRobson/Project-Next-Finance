import { Route, Routes as RouterRoutes } from 'react-router-dom'

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
      {children}
      <CtaSection />
      <Footer />
    </>
  )
}

const Routes = () => {
  return (
    <RouterRoutes>
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
  )
}

export default Routes
