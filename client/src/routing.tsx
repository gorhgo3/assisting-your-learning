import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HomePage from './pages/Home'
import Searching from './pages/Searching'
import Profile from './pages/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="personal/app" element={<Profile />} />
    </>
  )
)

export default router
