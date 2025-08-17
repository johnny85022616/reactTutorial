import React, { useState } from 'react'
import Child from './child';

function item() {
  const [count , setCount] = useState(0)
  
  function plus(){
    setCount((count) => count + 1)
    console.log(count);
  }

   return (
    <>
    <div>父元件count:{count}</div>
    <Child count={count}></Child>
    <button onClick={plus}>+1</button>
    </>
  )
}

export default item