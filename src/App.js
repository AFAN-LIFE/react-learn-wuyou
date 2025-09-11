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
