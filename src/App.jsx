import './App.css'
import Item from './components/component/item';
import UseEffectEample from './components/lifeCycle/useEffectEample';
import UseEffectFetch from './components/lifeCycle/useEffectFetch';
import StyledComponentExample from './components/component/StyledComponentExample';

function App() {
  return (
    <>
      {/* 父子元素 */}
      {/* <Item></Item> */}
      {/* 生命週期useEffect */}
      {/* <UseEffectEample></UseEffectEample> */}
      {/* useEffect搭配fetch練習  */}
      {/* <UseEffectFetch></UseEffectFetch> */}
      {/* styled component 使用教學  */}
      <StyledComponentExample></StyledComponentExample>
    </>
  )
}

export default App
