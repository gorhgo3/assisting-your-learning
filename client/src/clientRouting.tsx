import path from 'path'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home/">
        <Route path="app" element={<App />} />
      </Route>
      <Route path="/login/">
        <Route path="app" element={<HomePage />} />
      </Route>
    </>
  )
)

export default router
