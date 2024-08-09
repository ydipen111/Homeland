import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'Profile',
      element: <Profile />
    },
    {
      path: 'About',
      element: <About />
    },
    {
      path: 'SignIn',
      element: <SignIn />

    }

  ])

  return <RouterProvider router={router} />
}

export default App
