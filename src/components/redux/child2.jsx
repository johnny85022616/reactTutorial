import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
  const storeCount = useSelector(state => state.counterReducer)
  return (
    <>
      <h2>子組件2</h2>
      <p>目前總數為: {storeCount}</p>
    </>
  )
}

export default Child2