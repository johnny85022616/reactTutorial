import React, { useEffect } from 'react';
import FullscreenDialog from '../common/fullscreenDialog';
import '../../style/shopping/consigneeManagement/createDialog.scss';
import useMemberForm from '../../hooks/form/useMemberForm';
import { useDispatch } from 'react-redux';
import { createConsignee } from '../../redux/action/consigneeAction';

function CreateDialog({ closeCreateDialog }) {
  const dispatch = useDispatch()
  const [
    memberFormData,
    init,
    setMemberName,
    setMemberPhone,
    setMemberCity,
    setMemeberRegion,
    setMemberRoad,
    formCheck,
  ] = useMemberForm();

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
  function handleRoadInput(e) {
    if (e) setMemberRoad(e.target.value);
  }

  // 確認
  async function submitBtnClick() {
    const pass = formCheck(['name', 'phone', 'address']);
    if (!pass) return;
    const {name, phone, city, region, road } = memberFormData
    const payload = {
      data: {
        addr: road.replace(/\s*/g, ''),
        city,
        county: region,
        isDefault: true,
        mobile: phone,
        name: name 
      }
    }
    const isSubmitOk = await dispatch(createConsignee(payload))
    
    console.log("isSubmitOk",isSubmitOk);
  }

  return (
    <div className='createDialog'>
      <FullscreenDialog head={'新增收貨人'} closeFullScreenDialog={closeCreateDialog}>
        <div className='consigneeForm'>
          <div className={`group ${memberFormData.nameAlert ? ' error' : ''}`}>
            <p className='label'>*姓名</p>
            <input
              type='text'
              name='name'
              className='formInput'
              placeholder='請輸入姓名'
              onInput={(e) => {
                handleNameInput(e);
              }}
              value={memberFormData.name}
            />
            <p className='alertMsg'>{memberFormData.nameAlert}</p>
          </div>
          <div className={`group ${memberFormData.phoneAlert ? ' error' : ''}`}>
            <p className='label'>手機號碼</p>
            <input
              type='text'
              name='name'
              className='formInput'
              placeholder='請輸入手機號碼'
              maxLength={10}
              onInput={(e) => {
                handlePhoneInput(e);
              }}
              value={memberFormData.phone}
            />
            <p className='alertMsg'>{memberFormData.phoneAlert}</p>
          </div>
          <div className={`group ${memberFormData.addressAlert ? ' error' : ''}`}>
            <p className='text-c_heavy-metal'>*地址</p>
            <div className='addressTop'>
              <select
                name='city'
                onChange={(e) => {
                  handleCityChange(e);
                }}
                value={memberFormData.city}
              >
                {memberFormData?.cityArr.map((v, idx) => (
                  <option value={v.id} key={idx}>
                    {v.name}
                  </option>
                ))}
              </select>
              <select
                name='region'
                onChange={(e) => {
                  handleRegionChange(e);
                }}
                value={memberFormData.region}
              >
                {memberFormData?.regionArr?.map((v, idx) => (
                  <option value={v.id} key={idx}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
            <input type='text' className='formInput' placeholder='請輸入地址' onInput={(e) => handleRoadInput(e)} />
            <p className='alertMsg'>{memberFormData.addressAlert}</p>
          </div>
        </div>
        <div className='submitBtn'>
          <span onClick={submitBtnClick}>確認</span>
        </div>
      </FullscreenDialog>
    </div>
  );
}

export default CreateDialog;
