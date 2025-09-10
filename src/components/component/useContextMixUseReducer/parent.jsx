import React, { useReducer } from 'react'
import {CountContext} from './counterContext';
import Counter from './counter';
import Show from './show';

const initialState = 0;

const reducer = function(state, action){
  switch(action.type){
    case "add":
      return state + 1
    default:
      return state 
  }
}

function Parent() {
  const [count, counterDispatch] = useReducer(reducer , initialState)
  return (
    <>
      <div>Parent</div>
      <CountContext.Provider value={{count , counterDispatch}}>
        <Counter></Counter>
        <Show></Show>
      </CountContext.Provider>
    </>
  )
}

export default Parent