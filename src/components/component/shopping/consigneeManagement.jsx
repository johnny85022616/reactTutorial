import React, { useEffect, useState } from 'react';
import ConsigneeList from './cp/consignee/consigneeList';
import CreateDialog from './cp/consignee/createDialog';
import { useDispatch, useSelector } from 'react-redux';
import { getConsigneeList } from './redux/action/consigneeAction';
import './style/shopping/consigneeManagement/consigneeManagement.scss';

function ConsigneeManagement() {
  const [isDataGeted, setIsDataGeted] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  const dispatch = useDispatch();
  const { consigneeList, isLoading } = useSelector((state) => state.consigneeReducer); // redux取得狀態

  useEffect(() => {
    init();
  }, []);

  //若已經取得資料則設定isDataGeted=true
  useEffect(() => {
    if (!isDataGeted) setIsDataGeted(true);
  }, [consigneeList]);

  // 呼叫redux中取得收貨人資料thunk 
  async function init() {
    dispatch(getConsigneeList());
    setIsDataGeted(true);
  }

  //新增收貨人按鈕
  function handleCreateBtnClick() {
    setIsCreatePopupOpen(true);
  }

  //關閉新增收貨人dialog
  function closeCreateDialog(){
    setIsCreatePopupOpen(false)
  }

  let content;

  if (isLoading) {
    content = (
      <div className='loadingMap'>
        <p className='loadingText'>Loading...</p>
      </div>
    );
  } else {
    if (!isDataGeted) return null;
    if (consigneeList) {
      content = <ConsigneeList data={consigneeList}></ConsigneeList>;
    } else {
      content = <p className='noDataText'>無收貨人資訊</p>;
    }
  }

  return (
    <div className='consigneeManagement'>
      <div className='head'>
        <i className='backIcon' />
        <p>收貨人通訊錄管理</p>
        <span className='addBtn' onClick={handleCreateBtnClick}>
          新增
        </span>
      </div>
      {content}
      {isCreatePopupOpen && <CreateDialog closeCreateDialog={closeCreateDialog}></CreateDialog>}
    </div>
  );
}

export default ConsigneeManagement;
