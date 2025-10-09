import React, {useDeferredValue, useState } from 'react'
import SearchResult from './searchResult';



// useDeferredValue 適用在有大量大量資料需要render時，若體感上並無感覺卡頓則不需使用

//沒用 useDeferredValue：input 跟列表渲染同步，容易卡頓。
// react 的渲染順序是父 > 子 > 孫，走完整棵樹才算完成一次渲染流程
// 1.父組件的 render function 先執行。
// 2.父組件的 JSX 裡如果有子組件，React 會接著執行子組件的 render function。
// 3.子組件裡如果還有更深層的子組件，會繼續往下執行。
// 4.整個樹狀結構是「由上而下」依序執行 render。

//＊會造成卡頓的剖析
//1.使用者輸入1 觸發父組件render functinon
//2.觸發子組件rener function 
//3.使用者在子組件渲染完成前輸入2(剛剛的整個渲染流程來沒結束，子組件的渲染還在進行)，觸發父組件render流程
//4.第一次子組件的渲染流程還沒完成，因此react在等待第一次的完整渲染流程結束，才會進入下一次的完整渲染流程，因此早成卡頓


//有用 useDeferredValue：input 先即時更新包括渲染，列表渲染延遲，使用者體驗更好。


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