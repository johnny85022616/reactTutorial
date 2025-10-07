import React, { useCallback, useState } from 'react'
import Child from './child';

function useCallbackExample() {
  const [count, setCount] = useState(0)

  //每次父組件重新渲染都會重新定義(每次記憶體位置會不同)
  // function handleClick(){
  //   setCount(prev => prev+1)
  // }


  //使用useCallback綁定空dependency只會建立一次並不會每次付組件重新渲染都重新定義(記憶體位置都相同)
  const handleClick = useCallback(()=>{
    console.log(count); //若不綁定dependency直接取得狀態會因為閉包緣故，導致狀態一直停留在一開始
    setCount(prev => prev+1)
  },[])

  // const handleClick = useCallback(()=>{
  //   console.log(count); //有綁定dependency則當依賴改變時會觸發function重新綁定到當次的外層方法，建立新的閉包
  //   setCount(prev => prev+1)
  // },[count])

  return (
    <>
      <p>父組件count:{count}</p>
      <Child handleClick={handleClick}></Child>
    </>
  )
}

export default useCallbackExample