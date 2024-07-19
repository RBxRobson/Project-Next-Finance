import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Auth from '../pages/Auth'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </RouterRoutes>
  )
}

export default Routes
