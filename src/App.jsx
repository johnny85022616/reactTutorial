import './App.css'
import Item from './components/component/item';
import UseEffectEample from './components/lifeCycle/useEffectEample';
import UseEffectFetch from './components/lifeCycle/useEffectFetch';
import StyledComponentExample from './components/component/StyledComponentExample';
import UseMemoExample from './components/component/useMemo/useMemoExample';
import UseRefExample from './components/component/useRefExample';
import ReduxExample from './components/redux/reduxExample';
import UseReducerExample from './components/component/useReducerExample';
import UseContextMixUseReducer from './components/component/useContextMixUseReducer/parent';
import Line from './components/component/line';
import UseCallbackExample from './components/component/useCallback/parent';
import UseLayoutEffectExample from './components/component/useLayoutEffectExample';
import UseImperativeHandleExample from './components/component/useImperativeHandle/parent';
import UseContextExample from './components/component/useContext/parent'

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
      {/* <StyledComponentExample></StyledComponentExample> */}
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
      {/* <UseCallbackExample></UseCallbackExample> */}
      {/* <UseLayoutEffectExample></UseLayoutEffectExample> */}
      {/* useContext範例 */}
      <UseContextExample></UseContextExample>
      {/* <UseImperativeHandleExample></UseImperativeHandleExample> */}
      {/* <Line></Line> */}

    </>
  )
}

export default App
