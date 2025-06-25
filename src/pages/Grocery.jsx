import { useState } from 'react'
import { FiPlus, FiTrash2, FiShoppingCart } from 'react-icons/fi'

export default function Grocery() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('general')

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: input,
        category,
        purchased: false 
      }])
      setInput('')
    }
  }

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const categories = ['general', 'produce', 'dairy', 'meat', 'bakery', 'frozen']

  return (
    <div className="page">
      <h1>Grocery List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add grocery item..."
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        <button onClick={addItem}>
          <FiPlus />
        </button>
      </div>
      <ul className="grocery-list">
        {items.map(item => (
          <li key={item.id} className={item.purchased ? 'completed' : ''}>
            <span onClick={() => toggleItem(item.id)}>
              <FiShoppingCart className="cart-icon" />
              {item.text}
              <span className="category">{item.category}</span>
            </span>
            <button onClick={() => deleteItem(item.id)}>
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
        select {
          padding: 0 0.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
        }
        input:focus, select:focus {
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
        .grocery-list {
          list-style: none;
        }
        .grocery-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          box-shadow: var(--shadow);
        }
        .grocery-list li span {
          flex: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .cart-icon {
          color: var(--primary);
        }
        .category {
          margin-left: auto;
          padding: 0.25rem 0.5rem;
          background: #e2e8f0;
          border-radius: 1rem;
          font-size: 0.8rem;
          color: var(--text-light);
        }
        .grocery-list li.completed span {
          color: var(--text-light);
          text-decoration: line-through;
        }
      `}</style>
    </div>
  )
}
