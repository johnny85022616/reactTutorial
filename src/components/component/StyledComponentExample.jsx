import React from 'react'
import styled, { css } from 'styled-components'


const Button = styled.button.attrs({className: 'btn'})`
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  /* props的使用 */
  ${(props)=>
    props.$primary && css`
      color: white;
      background-color: red;
    `
    ||
    props.$secondary && css`
      color:white;
      background-color: blue;
    `
    ||
    props.$third && css`
      color:black;
      background-color: yellow;
    `
}
`;

// extend: 繼承寫好的樣式(繼承上面Button styledComponent)
const ExtendPromaryBtn = styled(Button)`
  font-size: 20px;
  font-weight: bold;
`

function StyledComponentExample() {

  return (
    <>
    <div>StyledComponentExample</div>
    <div>
      <Button $primary>primary</Button>
      <Button $secondary>secondary</Button>
      <Button $third>third</Button>
      <ExtendPromaryBtn $primary>繼承button</ExtendPromaryBtn>
    </div>
    </>
  )
}

export default StyledComponentExample