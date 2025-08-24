import React, { useState } from 'react'
import Child from './child';
import styled from 'styled-components';

const Button = styled.button.attrs({className:'plusBtn'})`
  background-color: red;
  color: white;
`

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
    <Button onClick={plus}>+1</Button>
    </>
  )
}

export default item