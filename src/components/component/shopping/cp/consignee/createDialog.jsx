import React, { useEffect } from "react";
import FullscreenDialog from "../common/fullscreenDialog";
import "../../style/shopping/consigneeManagement/createDialog.scss";
import useMemberForm from '../../hooks/form/useMemberForm'

function CreateDialog({ closeCreateDialog }) {

  const [memberFormData, setMemberFormData, init] = useMemberForm();

  useEffect(()=>{
    init()
  }, [])



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
            />
            <span className="alertMsg"></span>
          </div>
          <div className="consigneeForm__address mb-5 group error">
            <p className="text-c_heavy-metal">*地址</p>
            <div className="addressTop">
              <select
                className="formSelect group-[.error]:border-c_red mr-5"
                name="city"
              >
                <option value="1">台北市</option>
              </select>
              <select
                className="formSelect group-[.error]:border-c_red mr-5"
                name="region"
              >
                <option value="1">淡水區</option>
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
