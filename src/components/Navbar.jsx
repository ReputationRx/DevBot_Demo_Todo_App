import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiList, FiBook, FiTarget, FiShoppingCart } from 'react-icons/fi'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
        <FiHome />
      </Link>
      <Link to="/todo" className={location.pathname === '/todo' ? 'active' : ''}>
        <FiList />
      </Link>
      <Link to="/quotes" className={location.pathname === '/quotes' ? 'active' : ''}>
        <FiBook />
      </Link>
      <Link to="/goals" className={location.pathname === '/goals' ? 'active' : ''}>
        <FiTarget />
      </Link>
      <Link to="/grocery" className={location.pathname === '/grocery' ? 'active' : ''}>
        <FiShoppingCart />
      </Link>
      <style jsx>{`
        .navbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          display: flex;
          justify-content: space-around;
          padding: 1rem 0;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
        .navbar a {
          color: var(--text-light);
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .navbar a.active {
          color: var(--primary);
        }
        .navbar a:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </nav>
  )
}
