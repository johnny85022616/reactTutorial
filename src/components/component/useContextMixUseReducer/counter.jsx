import React, { useContext } from 'react'
import { CountContext } from './counterContext'

function Counter() {
  const { counterDispatch} = useContext(CountContext)
  return (
    <>
      <div>Counter</div>
      <button onClick={()=>counterDispatch({ type: "add" })}>+1</button>
    </>
  )
}

export default Counter