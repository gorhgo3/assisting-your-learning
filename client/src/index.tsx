import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './styles/index.css'
// import HomePage from './pages/HomePage.tsx'
// import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routing.tsx'
import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    {/* footer */}
  </React.StrictMode>
)
