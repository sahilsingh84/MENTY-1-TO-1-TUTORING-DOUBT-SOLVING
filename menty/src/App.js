<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Section2 from "./components/HomePageSection/Section2";
function App() {
  return (
    <div className="App">
      <Section2/>
=======
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
>>>>>>> 58a0fadd3554a2172c3821087e61ea923db55204
    </div>
  )
}

export default App
