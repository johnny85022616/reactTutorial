import React, { memo } from 'react'

function Child({handleClick}) {
  console.log(111111111); //每次render就會印出console
  return (
    <>
    <div>child</div>
    <button onClick={handleClick}> +1 </button>
    </>
  )
}

export default memo(Child)