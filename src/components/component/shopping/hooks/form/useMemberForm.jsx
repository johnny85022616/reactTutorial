import React, { useState } from 'react'
import address from '../../mockData/addressMap';
import { produce } from 'immer';

function useMemberForm() {

  const [memberForm , setMemeberForm] = useState({
    gender: 1,
    name: "",
    nameAlert: '',
    phone: '',
    phoneAlert: '',
    //email
    email: '',
    emailAlert: '',
    //地址
    city: 1,
    region: 1,
    road: '',
    addressAlert: '',
    cityArr: [], // 縣市陣
    regionArr: [], // 區域陣列
    sendEdm: false, // 是否同意EDM
    sendSms: false, // 是否同意簡訊
    hasMemeberName: false, // 是否有設定過會員名稱
    memberId: null,
  });

  console.log(memberForm , setMemeberForm);

  function init(){
    setMemeberForm(produce(memberForm, draft=>{
      const cityArr =  getCity();
      console.log(cityArr)
      draft.cityArr = cityArr
      draft.city = cityArr[0].id;
      draft.regionArr  = getCounty(draft.city);
      draft.region = draft.regionArr[0].id; 
      console.log(draft)  
    }))
  }

  // 縣 資料
  function getCity(){
    return (
      address.addressData.map((v) => {
        const { id, name } = v;
        return { id, name };
      }) || []
    );
  }

  // 區 資料
  function getCounty(id) {
    const obj = address.addressData.find((v) => v.id === id);
    return obj ? obj.counties || [] : [];
  }

  //防呆檢查
  function formCheck(fields) {
    const { checkName, checkMoblie, checkAddress, checkEmail } = tools;
    const alertMap = {
      name: () => (memberForm.nameAlert = checkName(memberForm.name)),
      phone: () => (memberForm.phoneAlert = checkMoblie(memberForm.phone)),
      address: () => (memberForm.addressAlert = checkAddress(memberForm.city, memberForm.region, memberForm.road)),
      email: () => (memberForm.emailAlert = checkEmail(memberForm.email)),
    };
    const isPass = fields.reduce((pass, field) => {
      const fieldPass = alertMap[field]() ? false : true;
      pass = pass && fieldPass;
      return pass;
    }, true);

    return isPass;
  }
  

  return (
    [memberForm, setMemeberForm, init, formCheck]
  )
}

export default useMemberForm