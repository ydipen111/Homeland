import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import RootLayouts from './rootlayouts/RootLayouts'
import SignIn from './Pages/SignIn'

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
        path: 'About',
        element: <About />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      // {
      //   path: 'Sign-in',
      //   element: <SignIn />
      // },
      {
        path: 'Profile',
        element: <Profile />
      },

      ]
    },

  ])

  return <RouterProvider router={router} />
}

export default App
