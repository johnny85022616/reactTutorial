import React, { useEffect } from "react";
import FullscreenDialog from "../common/fullscreenDialog";
import "../../style/shopping/consigneeManagement/createDialog.scss";
import useMemberForm from "../../hooks/form/useMemberForm";

function CreateDialog({ closeCreateDialog }) {
  const [memberFormData, init, setMemberName, setMemberPhone, setMemberCity, setMemeberRegion] = useMemberForm();

  useEffect(() => {
    init();
  }, []);
  // 設定會員名稱
  function handleNameInput(e) {
    if (e) setMemberName(e.target.value);
  }
  // 設定會員電話
  function handlePhoneInput(e) {
    if (e) setMemberPhone(e.target.value);
  }
  // 設定會員縣市
  function handleCityChange(e) {
    if (e) setMemberCity(parseInt(e.target.value));
  }
  // 設定會員區域
  function handleRegionChange(e) {
    if (e) setMemeberRegion(parseInt(e.target.value));
  }

  return (
    <div className="createDialog">
      <FullscreenDialog
        head={"新增收貨人"}
        closeFullScreenDialog={closeCreateDialog}
      >
        <div className="consigneeForm">
          <div className="group">
            <p className="label">*姓名</p>
            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="請輸入姓名"
              onInput={(e) => {
                handleNameInput(e);
              }}
              value={memberFormData.name}
            />
            <span className="alertMsg"></span>
          </div>
          <div className="group">
            <p className="label">手機號碼</p>
            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="請輸入手機號碼"
              maxLength={10}
              onInput={(e) => {
                handlePhoneInput(e);
              }}
              value={memberFormData.phone}
            />
            <span className="alertMsg"></span>
          </div>
          <div className="consigneeForm__address mb-5 group error">
            <p className="text-c_heavy-metal">*地址</p>
            <div className="addressTop">
              <select
                className="formSelect group-[.error]:border-c_red mr-5"
                name="city"
                onChange={(e) => {handleCityChange(e)}}
                value={memberFormData.city}
              >
                {memberFormData?.cityArr.map((v,idx) => (
                  <option value={v.id} key={idx}>{v.name}</option>
                ))}
              </select>
              <select
                className="formSelect group-[.error]:border-c_red mr-5"
                name="region"
                onChange={(e) => {handleRegionChange(e)}}
                value={memberFormData.region}
              >
                {memberFormData?.regionArr?.map((v,idx) => (
                  <option value={v.id} key={idx}>{v.name}</option>
                ))}
              </select>
            </div>
            <input type="text" className="formInput" placeholder="請輸入地址" />
            <span className="alertMsg">地址錯誤,請輸入地址</span>
          </div>
        </div>
      </FullscreenDialog>
    </div>
  );
}

export default CreateDialog;
