import React, { useImperativeHandle, useState } from 'react'

function Child({ref}) {

  const [inputVal, setInputVal] = useState("")

  function handleInput(e){
    setInputVal(()=> e.target.value)
  }

  useImperativeHandle(ref, ()=> ({
    inputVal
  }))


  return (
    <>
      <div>Child</div>
      <p>姓名：</p>
      <input type="text" onInput={(e)=>handleInput(e)} value={inputVal}/>
    </>
  )
}

export default Child