import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Quotes from './pages/Quotes'
import Goals from './pages/Goals'
import Grocery from './pages/Grocery'
import Navbar from './components/Navbar'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      navigate('/home')
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="app">
      <AnimatePresence>
        {showSplash ? (
          <Splash />
        ) : (
          <>
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/grocery" element={<Grocery />} />
              </Routes>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
