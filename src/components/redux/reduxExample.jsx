import React from 'react'
import Child1 from './child1';
import Child2 from './child2';

function Parent() {
  return (
    <>
    <h1>Redux練習</h1>
    <h2>父組件</h2>
    <Child1></Child1>
    <Child2></Child2>
    </>
  )
}

export default Parent