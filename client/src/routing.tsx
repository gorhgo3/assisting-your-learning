import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import HomePage from './pages/Home'
import Header from './components/Header'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path="/login/">
        <Route path="app" element={<App />} />
      </Route>
    </>
  )
)

export default router
