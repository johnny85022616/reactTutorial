import React, { Suspense, useState } from 'react'
import SearchResult from './searchResult';

function Search() {
  const [query, setQuery] = useState("")

  function handleInput(e){
    setQuery(e.target.value)
  }

  return (
    <>
      <input onInput={(e=>handleInput(e))}/>
      <Suspense fallback={<div>Loading</div>}>
        <SearchResult query={query}></SearchResult>
      </Suspense>
    </>
  )
}

export default Search