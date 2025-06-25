import React from 'react'
import { Link } from 'react-router-dom'
import { FiList, FiBook, FiTarget, FiShoppingCart } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome Back!</h1>
      <div className="cards">
        <Link to="/todo" className="card">
          <FiList size={32} />
          <h2>To Do</h2>
        </Link>
        <Link to="/quotes" className="card">
          <FiBook size={32} />
          <h2>Inspiration</h2>
        </Link>
        <Link to="/goals" className="card">
          <FiTarget size={32} />
          <h2>Goals</h2>
        </Link>
        <Link to="/grocery" className="card">
          <FiShoppingCart size={32} />
          <h2>Grocery</h2>
        </Link>
      </div>
      <style jsx>{`
        .home {
          padding: 2rem;
        }
        h1 {
          color: var(--primary);
          margin-bottom: 2rem;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text);
          box-shadow: var(--shadow);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card h2 {
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}
