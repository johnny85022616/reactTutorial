import React, { useMemo, useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
  color: white;
  background-color: red;
`

function UseMemoExample() {
  
  const [num , setNum] = useState(0);

  //相當於vue computed屬性
  const isEven = useMemo(()=>{
    console.log(num % 2 === 0);
    return num % 2 === 0
  },[num])

  function plus(){
    setNum(num => num+1)
  }

  return (
    <>
    <div>useMemoExample</div>
    <p>num : {num}</p>
    <p>isEven: {isEven}</p>
    <Button onClick={plus}>+1</Button>
    </>
    
  )
}

export default UseMemoExample