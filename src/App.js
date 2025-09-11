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