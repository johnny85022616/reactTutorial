import './App.css'
import Item from './components/component/item';
import UseEffectEample from './components/lifeCycle/useEffectEample';
import UseEffectFetch from './components/lifeCycle/useEffectFetch';
import StyledComponentExample from './components/component/StyledComponentExample';
import UseMemoExample from './components/component/useMemoExample';
import UseRefExample from './components/component/useRefExample';
import ReduxExample from './components/redux/reduxExample';
import UseReducerExample from './components/component/useReducerExample';
import UseContextMixUseReducer from './components/component/useContextMixUseReducer/parent';

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
      {/* useMemo屬性說明 */}
      {/* <UseMemoExample></UseMemoExample> */}
      {/* useRef屬性說明 */}
      {/* <UseRefExample></UseRefExample> */}
      {/* reudx 相關 */}
      {/* <ReduxExample></ReduxExample> */}
      {/* useReducer 相關 */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* useContext搭配useReducer實現Redux全域狀態管理 */}
      {/* <UseContextMixUseReducer></UseContextMixUseReducer> */}

    </>
  )
}

export default App
