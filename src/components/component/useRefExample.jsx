import React, { useEffect, useState } from 'react'

function useRefExample() {

  const [count, setCount] = useState(0)
  const [countPlusOne , setCountPlusOne] = useState(0)
  
  function plus(){
    setCount(count => count + 1)
  }

  useEffect(()=>{
    setCountPlusOne(count + 1)
  },[count])
  
  return (
    <>
      <div>useRefExample</div>
      <p>count: {count}</p>
      <p>countPlusOne: {countPlusOne}</p>
      <button onClick={plus}>+1</button>
    </>
  )
}

export default useRefExample