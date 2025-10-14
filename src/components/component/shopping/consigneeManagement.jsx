import React, { useEffect, useState } from "react";
import api from "./apis/api";
import ConsigneeList from "./cp/consignee/consigneeList";
import CreateDialog from './cp/consignee/createDialog'
import "./style/shopping/consigneeManagement/consigneeManagement.scss";

function ConsigneeManagement() {
  const [consigneeList, setConsigneeList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataGeted, setIsDataGeted] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  useEffect(() => {
    init()
  }, []);

  async function init(){
    await getConsignee();
    setIsDataGeted(true);
  };
  async function getConsignee() {
    setIsLoading(true);
    api.member.getConsignee(true).then((res) => {
      if (res) {
        setConsigneeList(res);
        setIsLoading(false);
      }
    });
  }

  //新增收貨人按鈕
  function handleCreateBtnClick(){
    setIsCreatePopupOpen(true);
  }

  let content;

  if (isLoading) {
    content = (
      <div className="loadingMap">
        <p className="loadingText">Loading...</p>
      </div>
    );
  } else {
    if(!isDataGeted) return null;
    if (consigneeList) {
      content = <ConsigneeList data={consigneeList} getConsignee={getConsignee}></ConsigneeList>;
    } else {
      content = <p className="noDataText">無收貨人資訊</p>;
    }
  }

  return (
    <div className="consigneeManagement">
      <div className="head">
        <i className="backIcon" />
        <p>收貨人通訊錄管理</p>
        <span className="addBtn" onClick={handleCreateBtnClick}>新增</span>
      </div>
      {content}
      {isCreatePopupOpen && <CreateDialog></CreateDialog>}
    </div>
  );
}

export default ConsigneeManagement;
