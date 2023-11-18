import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import HomePage from './pages/Home's
import Searching from './pages/Searching'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="personal/app" element={<App />} />
    </>
  )
)

export default router
