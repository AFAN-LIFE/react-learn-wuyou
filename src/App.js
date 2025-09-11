import {useState} from 'react'


// 这里onActive是接收到一个函数
function Detail ({ onActive }) {
  const [status, setStatus] = useState(false)
  function handleClick () {
      setStatus(!status)
      // 只要点击按钮，就调用函数传递新值，
      onActive(status)  
  }

  return (
    <div> 
      <button onClick={handleClick}> 按钮</button>

      <p style={{
        display: status ? 'block' : 'none'
      }}>Detail的内容</p>
    </div>
  )
}

export default function App() {
  // 组件通信
  // 5 将同级组件传值
  // 同级组件传递需要通过父组件的中转，此时用props就很麻烦，React提供了Hooks

function handleActive (status) {
  console.log('父组件收到', status)
}

  return (
    <>
      <Detail 
        onActive={handleActive}
      />
    </>
  );
}