import React, { useState } from 'react'
import { FiPlus, FiTrash2, FiCheck } from 'react-icons/fi'

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        completed: false 
      }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="page">
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>
          <FiPlus />
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
              {todo.completed && <FiCheck className="check-icon" />}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
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
        .todo-list {
          list-style: none;
        }
        .todo-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          box-shadow: var(--shadow);
        }
        .todo-list li span {
          flex: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .todo-list li.completed span {
          color: var(--text-light);
          text-decoration: line-through;
        }
        .check-icon {
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}
