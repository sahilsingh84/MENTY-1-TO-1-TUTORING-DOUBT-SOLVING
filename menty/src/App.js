import React, { useEffect } from 'react'
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
import VerifyEmail from './pages/VerifyEmail'
// import ForgotPassword from './pages/ForgotPassword'
// import UpdatePassword from './pages/UpdatePassword'
// import About from './pages/About'
// import Contact from './pages/Contact'
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import AttendQuestionPage from './pages/AttendQuestionPage'


//
import StudentInfo  from './pages/StudentInfo';
import InstructorInfo from './pages/InstructorInfo'
//doubt
import AskDoubt from "./components/core/Doubt/AskDoubt"
import LiveStream from './pages/LiveStream'
import { useSelector } from 'react-redux'
import NotificationPage from './pages/NotificationPage';

import Error from "./pages/Error";
import ChatSection from './components/core/ChatSection/ChatSection'

// socket
const App = () => {
  const {user}=useSelector((state)=>state.profile);
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Student-info" element={<StudentInfo/>} />
          <Route path="/Instructor-info" element={<InstructorInfo/>}></Route>
          <Route path="/signup" element = { <OpenRoute> <Signup /> </OpenRoute> } />
          <Route path="/login" element = { <OpenRoute> <Login /> </OpenRoute> } />
          <Route path="/forgot-password" element = { <OpenRoute> <ForgotPassword /> </OpenRoute> } />
          <Route path="/update-password/:id" element = { <OpenRoute> <UpdatePassword /> </OpenRoute> } />
          <Route path="about" element = {  <About /> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify-email" element = { <OpenRoute> <VerifyEmail /> </OpenRoute> } />
          <Route element = {<PrivateRoute> <Dashboard /> </PrivateRoute>} >
              <Route path="dashboard/my-profile" element={ < MyProfile />} /> 
              <Route path="dashboard/Settings" element={<Settings />} /> 
          </Route>
          {user?.role==="Student" && <Route path="/askdoubt" element={<PrivateRoute> <AskDoubt></AskDoubt></PrivateRoute>}></Route>}
          {user?.role==="Instructor" && <Route path="/notification" element={<PrivateRoute> <NotificationPage/></PrivateRoute>}></Route>}
          {user?.role==="Instructor" && <Route path="/attend-question/:id" element={<PrivateRoute> <AttendQuestionPage /></PrivateRoute>}></Route>}
          <Route path="/live-stream/:id" element={<PrivateRoute><LiveStream/></PrivateRoute>} />
          <Route path="/chat-section" element={<PrivateRoute><ChatSection/></PrivateRoute>}></Route>
          <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default App;