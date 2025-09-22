import { useRef, useState, forwardRef, useImperativeHandle } from 'react';

// 使用 forwardRef 包装子组件
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // 这里暴露子组件的方法或值
    sayHello: () => {
      alert('Hello from Child component!');
    }
  }));

  return <div>child</div>;
});

export default function App() {
  const childRef = useRef();
  
  function handleClick() {
    // 现在可以调用子组件暴露的方法
    if (childRef.current) {
      childRef.current.sayHello();
    }
  }

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleClick}>click</button>
    </div>
  );
}