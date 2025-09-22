import {useReducer, useState} from 'react'

// 便于管理一个对象的多种状态的复杂操作
function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(countReducer, 0) 
  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleDecrement = () => dispatch({ type: 'decrement' })

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleDecrement}>-</button>
      <span style={{ margin: '0 10px' }}>{state}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}