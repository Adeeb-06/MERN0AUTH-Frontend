import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassowrd'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from './pages/Profile'
import { AppContent } from './context/AppContext'

function App() {
   const { getUserData } = useContext(AppContent);

  useEffect(() => {
    getUserData(); // fetch user data when app loads
  }, []);
  return (
    <>
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
     
    </>
  )
}

export default App
