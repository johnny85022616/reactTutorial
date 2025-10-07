import React, { useContext } from 'react'
import {ThemeContext} from './parent'
import styled from 'styled-components'

const ShowArea = styled.div`
  width: 100%;
  height:300px;
  border: 1px solid gray;
  background-color: ${({$theme}) => ($theme === 'light' ? 'white' : 'black')};

`

function Child() {

const context = useContext(ThemeContext)
const {theme} = context
console.log(theme)
  return (
    <>
      <h2>Child</h2>
      <ShowArea $theme={theme}></ShowArea>
    </>
  )
}

export default Child
