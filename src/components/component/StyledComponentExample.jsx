import React, { useState } from 'react'
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


const GridTable = styled.div.attrs({ className: "gridTable" })`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  border: 1px solid #ccc;
  text-align: center;
`;
const Cell = styled.div.attrs({ className: "cell" })`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 8px;
  grid-column: ${({ $col_span }) =>
    $col_span ? `span ${$col_span}` : `span 1`}};
`;

// extend: 繼承寫好的樣式(繼承上面Button styledComponent)
const ExtendPromaryBtn = styled(Button)`
  font-size: 20px;
  font-weight: bold;
`

function StyledComponentExample() {

  const [buttonType] = useState('secondary') 
  const [data] = useState([
    {name: "張三", age: 25, city: "北京", description: "我是一個來自北京的年輕人，北京的東西都特別好吃"},
    {name: "李四", age: 30, city: "上海", description: "我喜歡旅遊和美食"},
    {name: "王五", age: 28, city: "廣州", description: "我是一名軟體工程師"},
  ])

  return (
    <>
    <div>StyledComponentExample</div>
    <div>
      <Button $primary>primary</Button>
      <Button $secondary>secondary</Button>
      <Button $third>third</Button>
      {/* 動態決定要傳入的props */}
      <Button {...{$primary: buttonType === 'primary', $secondary: buttonType === 'secondary'}}>controlBtn</Button>
      <ExtendPromaryBtn $primary>繼承button</ExtendPromaryBtn>
    </div>
    <GridTable>
        <Cell $col_span={2}>姓名</Cell>
        <Cell>年齡</Cell>
        <Cell>城市</Cell>
        <Cell $col_span={3}></Cell>
        {data.map((ele , idx)=>(
          <React.Fragment key={idx}>
            <Cell $col_span={2}>{ele.name}</Cell>
            <Cell>{ele.age}</Cell>
            <Cell>{ele.city}</Cell>
            <Cell $col_span={3}>{ele.description}</Cell>
          </React.Fragment>
        )
        )}
      </GridTable>
    </>
  )
}

export default StyledComponentExample