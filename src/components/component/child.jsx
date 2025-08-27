import React from 'react'

function Child(props) {
  return (
    <>
    <div>child</div>
    <p>子組件count:{props.count}</p>
    </>
  )
}

export default Child