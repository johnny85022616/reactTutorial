import React, { useRef } from 'react'
import Child from './child';

//父元件取得子元件方法或是屬性
function Parent() {

  const childRef = useRef(null)

  function getChildInputVal(){
    console.log(childRef.current.inputVal);
  }

  return (
    <>
    <div>Parent</div>
    <button onClick={getChildInputVal}>取得子元件輸入資料</button>
    <Child ref={childRef}></Child>
    </>
  )
}

export default Parent