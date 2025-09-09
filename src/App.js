import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  //  不做状态修改，点击了按钮内容也不更新渲染
  let divContent = '默认内容'

  // 方法1：普通状态
  // 一个用来读，一个用来改            设置初始值
  // 刚开始写的时候很复杂，如果每个变量默认都支持状态更新机制，页面负担很大
  // 因为每个组件一般只有2-3个状态，而不是每个变量都是状态
  const [content, setContent] = useState('标签的默认内容')

  // 方法2：对象形式的状态
  // 这里想对2个变量做统一处理，用对象更加合适
  const [data, setData] = useState({
    title : '默认标题',
    content : '默认内容'
  })

  // 方法3：数组形式的状态
  const [list, setList] = useState([
    {'id': 1, 'name': '小明'}, 
    {'id': 2, 'name': '小华'}, 
    {'id': 3, 'name': '小李'}
  ])
  const listData = list.map(item => (
    <li key={item.id}> {item.name} </li>
  ))


  function handleSimpleClick (e) {
    // 可以用e来接受事件的相关信息
    console.log('点击了按钮', e)
    // 这里点击了页面的内容也没有更新 Vue可以声明响应式数据
    // react没有这种机制，需要使用useState
    // divContent = '新内容'
    setContent('新内容')
  }

  function handleObjectClick (e) {
    // 这步会直接换，所以要写全
    setData({
      // content: '默认内容'
      ...data,  // 如果属性太多，可以用展开运算符，最后的属性会覆盖之前的同名属性
      title: '新标题', 
    })
  }

  function handleObjectClick (e) {
    // 这步会直接换，所以要写全
    setData({
      // content: '默认内容'
      ...data,  // 如果属性太多，可以用展开运算符，最后的属性会覆盖之前的同名属性
      title: '新标题', 
    })
  }


  let id = 3
  function handleListClick (e) {
    // 赋值
    // setList([
    //   ...list,
    //   {id: ++id, name:'小花猫'}
    // ])

    // 也可以过滤
    setList(list.filter(item => item.id !== 2))
  }

  return (
    <>
      {/* <div>{divContent}</div> */}

      {/* <div>{content}</div> */}
      {/* <button onClick={handleSimpleClick}> 普通状态按钮 </button> */}

      {/* <div title={data.title}>{data.content}</div> */}
      {/* <button onClick={handleObjectClick}> 对象状态按钮 </button> */}
    
      <ul> {listData}</ul>
      <button onClick={handleListClick}> 数组状态按钮 </button>
    
    </>
  );
}

export default App;
