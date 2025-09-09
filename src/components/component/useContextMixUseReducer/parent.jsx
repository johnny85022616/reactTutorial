import React, {useReducer } from 'react'
import { Provider } from 'react-redux';
import {CountContext} from './counterContext';


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
  const [counter, dispatch] = useReducer(reducer , initialState)
  return (
    <>
      <div>Parent</div>
      <CountContext.Provider value={{counter , dispatch}}>
        
      </CountContext.Provider>
    </>
  )
}

export default Parent