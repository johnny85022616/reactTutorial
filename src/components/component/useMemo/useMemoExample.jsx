import React, { useMemo, useState } from 'react'
import styled from 'styled-components';
import Child from './child';

const Button = styled.button`
  padding: 5px;
  color: white;
  background-color: red;
`

function UseMemoExample() {
  
  const [num , setNum] = useState(0);
  const [inputVal, setInputVal] = useState("")

  //相當於vue computed屬性
  const isEven = useMemo(()=>{
    console.log(num % 2 === 0);
    return num % 2 === 0
  },[num])

  function plus(){
    setNum(num => num+1)
  }

  function handleInput(e){
    setInputVal(e.target.value)
  }


  return (
    <>
    <div>useMemoExample</div>
    <p>num : {num}</p>
    <p>isEven: {isEven ? 'even': 'odd'}</p>
    <Button onClick={plus}>+1</Button>
    <input type="text" onChange={(e)=>{handleInput(e)}} value={inputVal} />
    <Child isEven={isEven}></Child>
    </>
    
  )
}

export default UseMemoExample