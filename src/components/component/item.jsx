import React, { useState } from 'react'
import Child from './child';
import styled from 'styled-components';

function item() {
  const [count , setCount] = useState(0)
  
  function plus(){
    setCount((count) => count + 1)
    console.log(count);
  }

  const button = styled.button.attrs({className:'plusBtn'})`
    background-color: red;
    color: white;
  `

   return (
    <>
    <div>父元件count:{count}</div>
    <Child count={count}></Child>
    <button onClick={plus}>+1</button>
    </>
  )
}

export default item