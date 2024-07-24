import { Route, Routes as RouterRoutes } from 'react-router-dom'

import { Footer } from '../components/organisms'
import Header from '../components/templates/Header'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

type LayoutProps = {
  children: JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
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
              <Route path="/about" element={<Auth />} />
            </RouterRoutes>
          </Layout>
        }
      />
    </RouterRoutes>
  )
}

export default Routes
