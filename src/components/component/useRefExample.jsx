import React, { useEffect, useRef, useState } from 'react'

function useRefExample() {
  const inputRef = useRef(null)
  const intervalRef = useRef(null)
  const [count,setCount] = useState(0)

  useEffect(()=>{
    inputRef.current.focus() //用途1 取得dom

    intervalRef.current = setInterval(()=>{  //用途2 不會依據state改變重新render
      setCount((count) => count + 1)
      },1000) //用途2 記錄資料
      return ()=>{
        clearInterval(intervalRef.current)
      }
  },[])
  
  return (
    <>
      <div>useRefExample</div>
      <input type="text" ref={inputRef} />
      <p>count: {count}</p>
      <button onClick={()=>clearInterval(intervalRef.current)}>停止</button>
    </>
  )
}

export default useRefExample