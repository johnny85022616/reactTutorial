import React, { Suspense, useDeferredValue, useState } from 'react'
import SearchResult from './searchResult';

//沒用 useDeferredValue：input 跟列表渲染同步，容易卡頓。
//有用 useDeferredValue：input 先即時更新，列表渲染延遲，使用者體驗更好。

function Search() {
  const [query, setQuery] = useState("")
  const deferredInput = useDeferredValue(query); // 延遲 input 的更新

  function handleInput(e){
    setQuery(e.target.value)
  }

  return (
    <>
      <input onInput={(e=>handleInput(e))}/>
      <SearchResult query={deferredInput}></SearchResult>
    </>
  )
}

export default Search