import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext(null);

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return <CountContext.Provider value={{ count, setCount }}>
    {children}
  </CountContext.Provider>;
}

export function useCounterContext(){
  return useContext(CountContext)
}

