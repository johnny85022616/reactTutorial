import React from 'react'
import { useCounterContext } from './countContext'
import styled from 'styled-components'

const BoxContainer = styled.div`
  display: flex;
` 

function ExChild() {
  const {count, setCount} = useCounterContext()
  
  function add(){
    setCount(prev => prev+1)
  }

  function minus(){
    setCount(prev => prev-1)
  }


  return (
    <>
      <BoxContainer>
        <button onClick={minus}>-1</button>
        <p>{count}</p>
        <button onClick={add}>+1</button>
      </BoxContainer>
    </>
  )
}

export default ExChild