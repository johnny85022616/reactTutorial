import React, { createContext, useState } from "react";
import Child from './child'
import styled from "styled-components";

export const ThemeContext = createContext(null);

const Button = styled.button`
  background-color: ${({type, theme})=>{
    console.log(theme , type);
    return theme === type? 'red':'unset'
  }};
`

function Parent() {
  const [theme, setTheme] = useState("light");

  function lightBtnClick(){
    setTheme("light")
  }

  function darkBtnClick(){
    setTheme("dark")
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <h1>Parent</h1>
        <p>目前主題 : {theme}</p>
        <Button type={'light'} theme={theme} onClick={lightBtnClick}>light</Button>
        <Button type={'dark'} theme={theme} onClick={darkBtnClick}>dark</Button>
        <Child></Child>
      </ThemeContext.Provider>
    </>
  );
}

export default Parent;
