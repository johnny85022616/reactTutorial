import React, {useEffect, useLayoutEffect, useRef, useState } from 'react'

// render function 執行（你看到「畫面渲染」console）
// React 把虛擬 DOM 轉成真實 DOM
// useLayoutEffect 執行（在瀏覽器繪製前）
// 瀏覽器真正把 DOM 畫到畫面上
// useEffect 執行（在瀏覽器繪製後）

function UseLayoutEffectExample() {

  const [divWidth , setDivWidth] = useState(null)
  const divRef = useRef(null)

  //畫面渲染完畢後才執行callback
  useEffect(()=>{
    console.log("useEffect callback執行");
    if(divRef.current){
      setDivWidth(divRef.current.offsetWidth)
    }
  },[])
  
  //callback在render Function執行後，畫面渲染完畢前執行
  useLayoutEffect(()=>{
    console.log("useLayoutEffect callback執行");
    if(divRef.current){
      setDivWidth(divRef.current.offsetWidth)
    }
  },[])

  return (
    <div ref={divRef} style={{
      width: '80%'
    }}> 
    <p>寬度：{divWidth}px</p>
    {console.log("畫面渲染")}
    </div>
  )
}

export default UseLayoutEffectExample