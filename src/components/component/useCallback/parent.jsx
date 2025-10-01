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
    setCount(prev => prev+1)
  },[])

  return (
    <>
      <p>父組件count:{count}</p>
      <Child handleClick={handleClick}></Child>
    </>
  )
}

export default useCallbackExample