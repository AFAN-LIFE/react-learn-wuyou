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

# 组件通信

## DOM组件

DOM 组件是 React支持的所有HTML和SVG标签，在React称作Props，React使用Props和HTML还是不一样的
- jsx语法可能和js的关键字class重复，所以DOM组件这里叫做className，显示还是class
- 用对象字面量imgStyleObj来设置style更加清晰
- 设置imgData能把所有的属性给提取出来

```
import logo from './logo.svg';

function App() {
  // 组件通信
  // 1 DOM 组件是 React支持的所有HTML和SVG标签，在React称作Props，React使用Props和HTML还是不一样的
  // 1.1 jsx语法可能和js的关键字class重复，所以DOM组件这里叫做className，显示还是class
  // 1.2 用对象字面量imgStyleObj来设置style更加清晰
  // 1.3 设置imgData能把所有的属性给提取出来

  const imgStyleObj = {
          width: 100, // 默认px，加单位要写 '100wh'
          height: 100,
          backgroudColor: 'grey',
        }
  
  // alt不能提出来
  const imgData = {
      className: "small",
      style: {
          width: 100, // 默认px，加单位要写 '100wh'
          height: 100,
          backgroudColor: 'grey',
        }
  }

  return (
    <div> 
      <img 
        src={logo} 
        alt=""
        // style={imgStyleObj}

        // 并不是ES6的展开运算符，是当前对象的键值直接放到这个位置，不能在没有容器的地方单独使用
        {...imgData}
      />
    </div>
  );
}

export default App;
```

## React 组件
通过export的标签，传值给function，完成自定义样式需求

React组件的Props 自定义处理组件处理
- 需求1：希望对组件的一些内容进行定制
  - Step1 请求功能所需的数据，比如文章的信息
  - Step2 创建Article 组件 并将文章数据分别传递给 
  - 操作：先定义好有自定义返回样式的function Article，从<Article/>标签接收值
- 需求2：在React组件用展开操作
  - 实际会有更多复杂的属性，需要将标题和内容区域做一个封装，比如设置子组件Detail
```
// 用一个props写
// function Article (props) {
//   return (
//     <div>
//         <h2> {props.title} </h2>
//         <p> {props.content} </p>
//     </div>
//   )
// }

// 也可以输入的时候就展开
// function Article ({title, content, active}) {
//   return (
//     <div>
//         <h2> {title} </h2>
//         <p> {content} </p>
//         <p> 状态：{active ? '显示' : '隐藏'} </p>
//     </div>
//   )
// }

// 还可以继续分层
// 更多细节不需要在Article做
function Detail ({content, active}) {
  return (
    <>
      <p> {content} </p>
      <p> 状态：{active ? '显示' : '隐藏'} </p>
    </>
  )
}

function Article ({title, detailData}) {
  return (
    <div>
        <h2> {title} </h2>
        <Detail {...detailData}/>
    </div>
  )
}

export default function App() {
  // 组件通信
  // 2 React组件的Props 自定义处理组件处理

  // 需求1：希望对组件的一些内容进行定制
  // Step1 请求功能所需的数据，比如文章的信息
  // Step2 创建Article 组件 并将文章数据分别传递给 Article

  // 需求2：在React组件用展开操作
  // 实际会有更多复杂的属性，需要将标题和内容区域做一个封装

  // 实际对于细节属性可能在接口返回的时候就会做一个包裹
  const articleData = {
    title: '标题1', 
    detailData: {
        content: "内容1",
        active: true
    }
  }

  return (
    <>
      {/* <Article
        title="标签1"
        content="内容1" 
        active         // 特别像DOM中的selected 或者autoplay 属性，不需要给值，默认是true
      />
      <Article
        title="标签2"
        content="内容2" 
        active
      />
      <Article
        title="标签3"
        content="内容3" 
        active
      /> */}

      <Article
        {...articleData}
      />
    </>
  );
}
```

## JSX插槽
通过export的标签，传值给function，完成自定义样式需求

将JSX作为Props传递，父组件除了传递DOM和React组件中的普通值外，还可以传递JSX，类似Vue的插槽概念
- 需求1： 子组件li作为children插入
- 需求2： 想在前后插入title和footer 实际中还可以将列表抽象成数组

```
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
```

## 子组件传父组件
注意：父组件传递给子组件的props都是单向（只读的），不要尝试修改
操作：先让父组件给子组件一个函数，然后子组件设置一个事件触发，从而将结果通过函数传递给父组件

```
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
```

## 同级组件传值
需要通过父组件的中转，此时用props就很麻烦，可以使用context

# Hooks
## useReducer
这边有个计数器，但是不好做状态管理
```
import {useState} from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleDecrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}
```
可以使用useReducer
```
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
```
## useRef
### 状态记录
用uesRef记住上次的状态
```
import {useRef, useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // 不是响应式状态，不会随着组件更新而更新
  const prevCount = useRef()

  function handleClick() {
    prevCount.current = count
    setCount(count + 1)
  }

  return (
    <div>
      <h1>最新的Count: {count}</h1>
      <p>上一次的Count: {prevCount.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
```
### 组件引用
可以获取组件焦点
```
import {useRef, useState} from 'react'

export default function App() {
  const inputRef = useRef(null)
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
```
### 子组件方法
使用 forwardRef 包装子组件
```
import { useRef, useState, forwardRef, useImperativeHandle } from 'react';

// 使用 forwardRef 包装子组件
// props是属性，ref是方法
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
```

## useEffect
副作用处理的钩子
```
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
```