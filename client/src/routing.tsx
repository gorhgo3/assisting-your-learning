import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import HomePage from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="personal/app" element={<App />} />
    </>
  )
)

export default router
