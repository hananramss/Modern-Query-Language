import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { TransHistory } from './pages/TransHistory'
import { Profile } from './pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
       <Header />
       
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trans_history" element={<TransHistory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </Router>
  )
}
