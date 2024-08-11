import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import Root from 'postcss/lib/root'
import RootLayouts from './rootlayouts/RootLayouts'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayouts />,
      children: [{
        index: true,
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
      },
      {
        path: 'SignUp',
        element: <SignUp />
      }
      ]
    },

  ])

  return <RouterProvider router={router} />
}

export default App
