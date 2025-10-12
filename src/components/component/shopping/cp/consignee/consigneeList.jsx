import React from "react";
import styled from "styled-components";

const Clist = styled.ul`
  list-style: none;
  background-color: #f4f4f4;
  min-height: 100vh;
  list-style-type: none;
  padding: 10px 0;
  margin-bottom: 60px;
`;

const ConsigneeItem = styled.li`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  margin: 10px 10px;
  border-radius: 8px;
`;

function ConsigneeList({data}) {
  return <div className="consigneeList">
    <Clist>
      12345
    </Clist>
  </div>;
}

export default ConsigneeList;
