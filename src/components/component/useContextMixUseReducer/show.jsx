import React, { useContext } from 'react'
import { CountContext } from './counterContext'

function Show() {
  const {count} = useContext(CountContext)
  return (
    <>
      <div>Show</div>
      <p>目前數字: {count}</p>
    </>
  )
}

export default Show