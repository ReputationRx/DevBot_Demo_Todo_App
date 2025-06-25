import React, { useState } from 'react'
import { FiPlus, FiTrash2, FiAward } from 'react-icons/fi'

export default function Goals() {
  const [goals, setGoals] = useState([])
  const [input, setInput] = useState('')
  const [targetDate, setTargetDate] = useState('')

  const addGoal = () => {
    if (input.trim() && targetDate) {
      setGoals([...goals, { 
        id: Date.now(), 
        text: input,
        targetDate,
        completed: false 
      }])
      setInput('')
      setTargetDate('')
    }
  }

  const toggleGoal = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ))
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <div className="page">
      <h1>Goals</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Goal description..."
        />
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
        <button onClick={addGoal}>
          <FiPlus />
        </button>
      </div>
      <ul className="goal-list">
        {goals.map(goal => (
          <li key={goal.id} className={goal.completed ? 'completed' : ''}>
            <div className="goal-content">
              <span onClick={() => toggleGoal(goal.id)}>
                {goal.text}
                {goal.completed && <FiAward className="award-icon" />}
              </span>
              <small>Target: {new Date(goal.targetDate).toLocaleDateString()}</small>
            </div>
            <button onClick={() => deleteGoal(goal.id)}>
              <FiTrash2 />
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .page {
          padding: 2rem;
        }
        h1 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .input-container {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }
        input[type="date"] {
          max-width: 150px;
        }
        input:focus {
          outline: none;
          border-color: var(--primary-light);
        }
        button {
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        button:hover {
          background: var(--primary-light);
        }
        .goal-list {
          list-style: none;
        }
        .goal-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          box-shadow: var(--shadow);
        }
        .goal-content {
          flex: 1;
        }
        .goal-content span {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .goal-content small {
          color: var(--text-light);
          font-size: 0.8rem;
        }
        .goal-list li.completed span {
          color: var(--text-light);
          text-decoration: line-through;
        }
        .award-icon {
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}
