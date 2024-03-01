import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;