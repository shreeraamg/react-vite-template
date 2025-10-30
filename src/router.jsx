import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import RootLayout from './layouts/RootLayout'

export default createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [{ index: true, Component: HomePage }] }
])
