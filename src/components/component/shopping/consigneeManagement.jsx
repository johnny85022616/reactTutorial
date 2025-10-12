import React from "react";
import styled from "styled-components";
import nextArrow from "../../../assets/icons/shopping/next_arrow.png";

const Head = styled.div`
  width: 100%;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const BackIcon = styled.i`
  width: 44px;
  height: 44px;
  background: url(${nextArrow}) 50% / 20px no-repeat;
`;

const AddBtn = styled.span`
  font-size: 15px;
  color: #3f3f3f;
  font-weight: 500;
  margin-right: 20px;
`;

function ConsigneeManagement() {
  return (
    <div className="consigneeManagement">
      <Head>
        <BackIcon />
        <p>收貨人通訊錄管理</p>
        <AddBtn>新增</AddBtn>
      </Head>
    </div>
  );
}

export default ConsigneeManagement;
