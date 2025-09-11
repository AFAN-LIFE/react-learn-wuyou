# 脚手架创建

```
npx --version  # 10.9.2
npx create-react-app myapp # 创建项目myapp
cd myapp
npm start  # 启动项目
```

# src 源码目录
## index.js 
项目入口文件，主要引入了react和ReactDOM
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 用ReactDOM方法创建了一个React实例
const root = ReactDOM.createRoot(document.getElementById('root'));
// 然后进行了组价的渲染
root.render(
  // 这是组件进行功能审查的严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
## App.js    
根组件，默认是js后缀，导入的时候不写JS也可以  
这是一种jsx的语法，将javascript和html融合在了一起  
jsx这种模板语法结合的更加深入，Vue中也用但是比较少

```
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
### return换行小括号

return的时候换行写的时候必须要加小括号，建议都写

### return一个根元素

react在return的时候只能返回一个div根元素，最简单的方式就是把它包在内部  
还可以写一个空的标签，这样就能避免必须要设置多级但不希望出现外部父级的方式
```
<>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div></div>
</>
```

# 数据渲染
- 方法1：普通插入
- 方法2：条件插值
- 方法3：列表插值

```
import logo from './logo.svg';
import {Fragment} from 'react';
import './App.css';

function App() {

  // 方法1：普通插入
  // const divContent = '标签内容'
  const divTitle   = '标签标题'


  // 方法2：条件插值
  let divContent = null
  const flag = true
  if (flag) {
    // 之前js需要写成字符串结构
    // divContent = '<span>flag为true</span>'
    // 但是jsx可以直接书写
    divContent = <span>flag为true</span>
  } else {
    divContent = <p>flag为true</p>
  }

  // 方法3：列表插值
  // 推荐给每个值增加一个id，这应该是后端返回的时候就有对应的id
  const list = [
    {'id': 1, 'name': '小明'}, 
    {'id': 2, 'name': '小华'}, 
    {'id': 3, 'name': '小李'}
  ]
  // map是有返回值的
  const listContent = list.map(item => (
    // 更好的方式是在外面增加一个组件结构
    <Fragment>
    {/* // 要确保同级元素key唯一，不要直接将数据作为key，不然key也会轻易变 */}
    <li key={item.id}>{item.name}</li>
    {/* // 如果有多个根元素，但是jsx只能有一个li，可以在外部加<> </> 空标签 */}
    <li> -------------- </li>
    </Fragment>
  ))

  return (
    <>
      <div title={divTitle}>
        {divContent}
      </div>

      <ul>{listContent}</ul>
    </>
  );
}

export default App;

```

# 状态更新
- 不做状态修改
- 普通状态
- 对象状态
- 列表状态

```
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

```