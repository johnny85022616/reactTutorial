import React, {useState } from "react";
import address from "../../mockData/addressMap";
import { produce } from "immer";
import tools from '../../utils/tools';

function useMemberForm() {
  const [memberForm, setMemeberForm] = useState({
    gender: 1,
    name: "",
    nameAlert: "",
    phone: "",
    phoneAlert: "",
    //email
    email: "",
    emailAlert: "",
    //地址
    city: 1,
    region: 1,
    road: "",
    addressAlert: "",
    cityArr: [], // 縣市陣
    regionArr: [], // 區域陣列
    sendEdm: false, // 是否同意EDM
    sendSms: false, // 是否同意簡訊
    hasMemeberName: false, // 是否有設定過會員名稱
    memberId: null,
  });

  function init() {
    setMemeberForm(
      produce(memberForm, (draft) => {
        const cityArr = getCity();
        draft.cityArr = cityArr;
        draft.city = cityArr[0].id;
        draft.regionArr = getRegion(draft.city);
        draft.region = draft.regionArr[0].id;
      })
    );
  }

  // 縣 資料
  function getCity() {
    return (
      address.addressData.map((v) => {
        const { id, name } = v;
        return { id, name };
      }) || []
    );
  }

  // 區 資料
  function getRegion(id) {
    const obj = address.addressData.find((v) => v.id === id);
    return obj ? obj.counties || [] : [];
  }

  //設定會員名稱
  function setMemberName(val) {
    setMemeberForm(
      produce(memberForm, (draft) => {
        draft.name = val;
      })
    );
  }
  //設定會員電話
  function setMemberPhone(val) {
    setMemeberForm(
      produce(memberForm, (draft) => {
        draft.phone = val;
      })
    );
  }
  //設定會員縣市(選擇縣市後預設區域為該縣市第一筆區域資料)
  function setMemberCity(val){
    setMemeberForm(
      produce(memberForm, (draft) => {
        draft.city = val;
        draft.regionArr = getRegion(val);
        draft.region = draft.regionArr[0]?.id ;
      })
    );
  }
  //設定會員區域
  function setMemeberRegion(val){
    setMemeberForm(
      produce(memberForm, (draft) => {
        draft.region = val;
      })
    );
  }
  //設定街道
  function setMemberRoad(val){
    setMemeberForm(produce(memberForm, (draft)=>{
      draft.road = val
    }))
  }

  //防呆檢查
  function formCheck(fields) {
    const { checkName, checkMoblie, checkAddress, checkEmail } = tools;
    const alertMap = {
      name: () => {
        const nameAlert = checkName(memberForm.name)
        setMemeberForm((prev)=>({...prev, nameAlert}))
        return nameAlert
      } ,
      phone: () => {
        const phoneAlert = checkMoblie(memberForm.phone)
        setMemeberForm((prev)=>({...prev, phoneAlert}))
        return phoneAlert
      } ,
      address: () =>{
        const addressAlert = checkAddress(
          memberForm.city,
          memberForm.region,
          memberForm.road
        )
        setMemeberForm((prev)=>({...prev, addressAlert: addressAlert}))
        return addressAlert
      },
      email: () => setMemeberForm((prev)=> ({...prev, emailAlert: checkEmail(memberForm.email) })) 
    };
    const isPass = fields.reduce((pass, field) => {
      const fieldPass = alertMap[field]() ? false : true;
      pass = pass && fieldPass;
      return pass;
    }, true);
    return isPass;
  }

  return [memberForm, init, setMemberName, setMemberPhone, setMemberCity, setMemeberRegion, setMemberRoad, formCheck];
}

export default useMemberForm;
