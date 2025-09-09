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
