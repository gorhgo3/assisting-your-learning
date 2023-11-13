import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routing.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>
)
