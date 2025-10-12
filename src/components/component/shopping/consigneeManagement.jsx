import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from './apis/api'
import nextArrow from "../../../assets/icons/shopping/next_arrow.png";
import ConsigneeList from './cp/consignee/consigneeList'

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

const LoadingMap = styled.div`
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const LoadingText =styled.p`
  font-size: 1.2rem; 
  color: white;
`

const noDataText = styled.div`
  margin-top: 200px;
  font-size: 1.8rem;
`

function ConsigneeManagement() {

  const [consigneeList, setConsigneeList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    getConsignee()
  },[])

  async function getConsignee(){
    setIsLoading(true)
    api.member.getConsignee().then((res)=>{
      if(res){
        setConsigneeList(res)
        setIsLoading(false)
      }
    })
  }

  let content;

  if (isLoading) {
    content = <LoadingMap><LoadingText>Loading...</LoadingText></LoadingMap>
  }else{
    if(consigneeList){
      content = <ConsigneeList data={consigneeList}></ConsigneeList>
    }else{
      content = <noDataText></noDataText>
    }
  }


  return (
    <div className="consigneeManagement">
      <Head>
        <BackIcon />
        <p>收貨人通訊錄管理</p>
        <AddBtn>新增</AddBtn>
      </Head>
      {content}
    </div>
  );
}

export default ConsigneeManagement;
