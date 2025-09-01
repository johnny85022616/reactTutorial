import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { increment, decrement } from '../../redux/actions/counter'

const Button = styled.button.attrs({className: 'countBtn'})`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  margin-top: 10px;
  ${(props)=>{
    props.$decrease && css`
      background-color: blue;
    `
  }}

`

function Child1() {

  const [inputNum, setInputNum] = useState(0)
  const dispatch = useDispatch()

  function handleInput(e){
    setInputNum(()=>(e.target.value))
  }
  
  function handleBtnClick(type){
    const num = Number(inputNum)
    if(type === 'increase') dispatch(increment(num))
    else dispatch(decrement(num))
  }
  return (
  <>
    <h2>子組件1</h2>
    <input type="number" onInput={handleInput} value={inputNum}/>
    <Button onClick={()=>handleBtnClick('increase')}>加上input中數字</Button>
    <Button $decrease onClick={()=>handleBtnClick()}>減去input中數字</Button>
    </>
  )
}

export default Child1