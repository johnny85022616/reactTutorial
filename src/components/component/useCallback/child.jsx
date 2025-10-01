import React, { memo } from 'react'

function Child({handleClick}) {
  console.log(111111111);
  return (
    <>
    <div>child</div>
    <button onClick={handleClick}> +1 </button>
    </>
  )
}

export default memo(Child)