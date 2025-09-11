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
  // 4 将子组件传递给父组件
  // 注意：父组件传递给子组件的props都是单向（只读的），不要尝试修改
  // 先让父组件给子组件一个函数，然后子组件设置一个事件触发，从而将结果通过函数传递给父组件

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