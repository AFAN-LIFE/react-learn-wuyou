import {useRef, useState} from 'react'

export default function App() {
  const inputRef = useRef(null)
  // 不是响应式状态，不会随着组件更新而更新
  const prevCount = useRef()

  function handleClick() {
    // 点击获取焦点 .current能获取到input的dom对象
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

