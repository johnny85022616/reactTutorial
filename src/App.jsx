import './App.css'
import Item from './components/component/item';
import UseEffectEample from './components/lifeCycle/useEffectEample';
import UseEffectFetch from './components/lifeCycle/useEffectFetch';

function App() {
  return (
    <>
      {/* 父子元素 */}
      <Item></Item>
      {/* 生命週期useEffect */}
      {/* <UseEffectEample></UseEffectEample> */}
       {/* useEffect搭配fetch練習  */}
       {/* <UseEffectFetch></UseEffectFetch> */}
    </>
  )
}

export default App
