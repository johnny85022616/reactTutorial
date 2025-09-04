import React, { useReducer } from 'react'
import styled, { css } from 'styled-components'



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

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
}
function reducer(state, action){
    switch(action.type){
      case "add":
        return {
          ...state,
          firstCounter: state.firstCounter + action.payload
        }
      case "add2":
        return {
          ...state,
          secondCounter: state.secondCounter + 1
        }
      default:
        return state


    }
  }

function useReducerExample() {

  const [count, dispatch] = useReducer(reducer , initialState)

  return (
    <>
      <div>useReducerExample</div>

      <p>firstCounter: {count.firstCounter}</p>
      <p>secondCounter: {count.secondCounter}</p>

      <Button onClick={()=>{dispatch({type: "add" , payload: 5})}}>firstCounter + 5</Button>
      <Button onClick={()=>{dispatch({type: "add2"})}}>secondCounter + 1</Button>
      
    </>
  )
}

export default useReducerExample