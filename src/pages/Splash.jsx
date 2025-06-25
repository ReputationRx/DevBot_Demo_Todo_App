import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

export default function Splash() {
  return (
    <motion.div
      className="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <FiCheckCircle size={64} color="var(--primary)" />
      </motion.div>
      <h1>Productivity Suite</h1>
      <style jsx>{`
        .splash {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: 1rem;
        }
        h1 {
          color: var(--primary);
          font-size: 2rem;
        }
      `}</style>
    </motion.div>
  )
}
