import React, { useState } from 'react'
import Child from './child';
import styled from 'styled-components';

function Item() {
  const [count , setCount] = useState(0)
  
  function plus(){
    setCount((count) => {
      count += 1
      console.log("new value in setCount callback : ", count ); //在setXXX callback中可直接取的新的值
      return count
    })
    console.log("not in callback : ", count ); // 若不是在setXXX callback中只能取得舊的值
  }

  const Button = styled.button.attrs({className:'plusBtn'})`
    background-color: red;
    color: white;
  `

   return (
    <>
    <div>父元件count:{count}</div>
    <Child count={count}></Child>
    <Button onClick={plus}>+1</Button>
    </>
  )
}

export default Item