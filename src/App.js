// // 组件标签自动会作为Props的属性，预定义的children就是内部的子元素
// function List ({children}) {
//   return (
//     <>
//       <h2>
//           {title}
//       </h2>
//       <ul>
//           {children}
//       </ul>
//     </>
//   )
// }

// 因为有的不传递footer，所以footer要有一个默认值
function List ({children, title, footer=<div>默认底部</div>}) {
  return (
    <>
      <h2>
          {title}
      </h2>
      <ul>
          {children}
      </ul>
      {footer}
    </>
  )
}

export default function App() {
  // 组件通信
  // 3 将JSX作为Props传递 
  // 父组件除了传递DOM和React组件中的普通值外，还可以传递JSX，类似Vue的插槽概念

  // 需求1： 子组件li作为children插入
  // 需求2： 想在前后插入title和footer 实际中还可以将列表抽象成数组
  
  return (
    <>
      <List
        title="列表1"
        footer={<p>这是底部内容</p>}
      > 
        <li>列表项1</li>
        <li>列表项1</li>
        <li>列表项1</li>
      </List>
      <List> 
        <li>列表项2</li>
        <li>列表项2</li>
        <li>列表项2</li>
      </List>
    </>
  );
}