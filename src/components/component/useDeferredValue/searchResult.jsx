import React, { useEffect, useMemo, useState } from 'react';


function SearchResult({ query }) {

  const [data] = useState( Array.from({ length: 10000 }, (_, i) => `item${i}`))
  const filtered = useMemo(()=>{
    return data.filter(item => item.includes(query));
  },[query])

  useEffect(()=>{
    console.log(12121313112);
  })

  return (
    <ul>
      {filtered.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default SearchResult;
