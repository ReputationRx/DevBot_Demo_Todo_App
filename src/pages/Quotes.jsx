import React, { useState } from 'react'
import { FiRefreshCw } from 'react-icons/fi'

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
]

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  return (
    <div className="page">
      <h1>Inspirational Quotes</h1>
      <div className="quote-container">
        <blockquote>{quotes[currentQuote]}</blockquote>
        <button onClick={nextQuote}>
          <FiRefreshCw /> New Quote
        </button>
      </div>
      <style jsx>{`
        .page {
          padding: 2rem;
        }
        h1 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .quote-container {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        blockquote {
          font-size: 1.2rem;
          font-style: italic;
          text-align: center;
          color: var(--text);
        }
        button {
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }
        button:hover {
          background: var(--primary-light);
        }
      `}</style>
    </div>
  )
}
