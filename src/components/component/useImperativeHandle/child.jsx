import React, { useImperativeHandle, useState } from 'react'

function Child({ref}) {

  const [nameVal, setNameVal] = useState("")
  const [phoneVal, setPhoneVal] = useState("")

  function handleNameInput(e){
    setNameVal(()=> e.target.value)
  }
  function handlePhoneInput(e){
    setPhoneVal(()=> e.target.value)
  }

  function submit(){
    return {name: nameVal, phone: phoneVal}
  }


  //這是要暴露出去給父元素的屬性或方法
  useImperativeHandle(ref, ()=> ({
    nameVal,
    submit
  }))
  


  return (
    <>
      <div>Child</div>
      <p>姓名：</p>
      <input type="text" onInput={(e)=>handleNameInput(e)} value={nameVal}/>
      <p>電話</p>
      <input type="text" onInput={(e)=>handlePhoneInput(e)} value={phoneVal}/>
    </>
  )
}

export default Child