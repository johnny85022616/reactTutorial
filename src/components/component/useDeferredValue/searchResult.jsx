import React, { use, useMemo } from 'react';

function fetchResult(query) {
  return new Promise(resolve => {
    setTimeout(() => {
      if(!query) resolve(null)
      else{
        resolve(query + '12345');
      }      
    }, 1000);
  });
}

function SearchResult({ query }) {
  // 只要 query 變動就重新建立 Promise
  const promise = useMemo(() => fetchResult(query), [query]);
  const result = use(promise);
  console.log(111111, result);

  return <p>result: {result}</p>;
}

export default SearchResult;
