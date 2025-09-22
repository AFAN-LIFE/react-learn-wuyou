import {useEffect, useState} from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  // 可以在这里进行一些副作用操作，比如数据获取、订阅等
  // 如果为空，就是任何操作都不会让它重复执行
  useEffect(() => {
    console.log('useEffect')
  }, [count]) // 依赖项是 count，只有当 count 变化时才会重新执行

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleDecrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}