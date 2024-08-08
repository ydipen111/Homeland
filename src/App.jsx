import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SIngUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
