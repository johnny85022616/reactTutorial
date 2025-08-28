import React, { useEffect, useRef, useState } from 'react'

function useRefExample() {
  const inputRef = useRef(null)
  const intervalRef = useRef(null)
  const [count,setCount] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const preinputVal = useRef('')

  useEffect(()=>{
    inputRef.current.focus() //用途1 取得dom

    intervalRef.current = setInterval(()=>{  //用途2 不會依據state改變重新render
      setCount((count) => count + 1)
      },1000)
      return ()=>{
        clearInterval(intervalRef.current)
      }
  },[])

  useEffect(()=>{
    preinputVal.current  = inputVal //用途3 紀錄state變化前的值
  },[inputVal])

  function handleInput(e){
    setInputVal(e.target.value)
  } 
  
  return (
    <>
      <div>useRefExample</div>
      <input type="text" ref={inputRef} />
      <p>count: {count}</p>
      <button onClick={()=>clearInterval(intervalRef.current)}>停止</button>

      <input type="text" value={inputVal} onInput={handleInput} />
      <p>前次輸入： {preinputVal.current}</p>
    </>
  )
}

export default useRefExample