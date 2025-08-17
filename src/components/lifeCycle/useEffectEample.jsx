import React, { useEffect, useState } from 'react'

function useEffectEample() {
  const [count, setCount] = useState(0)
  function plus(){
    setCount(count => count + 1)
    console.log("setCount後的count",count);  
  }

  //陣列中未監聽變數，只有一開始會執行(componentDidMount)
  // useEffect(()=>{
  //   console.log('first render');
  // },[])

   //第二個參數不傳入，只要組件更新都會執行(componentDidUpdate) 
  // useEffect(()=>{
  //   console.log("componentDidUpdate");
  // })

  //陣列中有監聽變數，變數改變才會執行callback(wach)
  // useEffect(()=>{
  //   console.log('useEffect callback中的count:'+count);
  // },[count])

  //組件卸載時觸發(componentWillUnMount)
  // useEffect(()=>{
  //   console.log(1111);
  //   return ()=>{
  //     console.log("unMount");
  //   }
  // },[])

  return (
    <>
      <div>useEffect</div>
      <p>count: {count}</p>
      <button onClick={plus}>+1</button>
    </>
  )
}

export default useEffectEample