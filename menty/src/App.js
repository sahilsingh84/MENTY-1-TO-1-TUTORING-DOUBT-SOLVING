import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import OpenRoute from './components/core/Auth/OpenRoute'
import Signup from './pages/Signup'
import Login from './pages/Login'
// import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element = { <OpenRoute> <Signup /> </OpenRoute> } />
          <Route path="/login" element = { <OpenRoute> <Login /> </OpenRoute> } />
          <Route path="/forgot-password" element = { <OpenRoute> <ForgotPassword /> </OpenRoute> } />
          <Route path="/update-password/:id" element = { <OpenRoute> <UpdatePassword /> </OpenRoute> } />
          <Route path="about" element = {  <About /> } />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
           {/* 
            <Route path="verify-email" element = { <OpenRoute> <VerifyEmail /> </OpenRoute> } />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App;