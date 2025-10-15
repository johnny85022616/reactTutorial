import React, { useState } from 'react'
import address from '../mockData/addressMap';

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

  // function init(){

  // }
  
  // function getCity(){
  //   return (
  //     address.addressData.map((v) => {
  //       const { id, name } = v;
  //       return { id, name };
  //     }) || []
  //   );
  // }
  

  return (
    {}
  )
}

export default useMemberForm