import React, { useEffect, useState } from 'react'
import { useCounterContext} from './countContext';
import ExChild from './exChild';
function ExParent() {
  const [data , setData] = useState({name: '雨衣', price: 20 , qty: 0})
  const {count} = useCounterContext()
  useEffect(()=>{
    setData((prev)=> ({...prev, qty: count}))
  },[count])
  return (
    <>
    <h1>ExParent</h1>
      <p>品名： {data.name}</p>
      <p>單價： {data.price}</p>
      <p>數量： {data.qty}</p>
      <ExChild></ExChild>
    </>
  )
}

export default ExParent