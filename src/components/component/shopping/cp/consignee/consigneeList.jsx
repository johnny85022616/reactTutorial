import React from 'react';
import api from "../../apis/api";
import {useFadeAlert} from '../common/fadeAlert';

function ConsigneeList({ data, getConsignee }) {
  const {showAlert} = useFadeAlert()
  async function updateDefaultConsignee(id){
    try{
      const pass = await api.member.updateDefaultConsignee(id);
      if (!pass) return;
      getConsignee()
      showAlert("修改成功")
    }catch(e){
      console.error("updateDefaultConsignee function error," , e);
    }
  }

  async function deleteConsignee(id){
    try{
      const pass = await api.member.updateDefaultConsignee(id);
      if (!pass) return;
      await getConsignee()
      showAlert("刪除成功")
    }catch(e){
      console.error("deleteConsignee function error," , e);
    }
  }

  async function handleRadioClick(id){
    updateDefaultConsignee(id)
  }

  async function handleDeleteBtnClick(id){
    deleteConsignee(id)
  }

  return (
    <div className='consigneeList'>
      <ul>
        {data.map((item, idx) => {
          return (
            <li className='consigneeItem' key={idx}>
              <div className='left'>
                <div className='top'>
                  <span>
                    <i className={item.isDefault === "Y" ? 'iconRadio_on' : 'iconRadio'} onClick={()=>handleRadioClick(item.id)}></i>
                  </span>
                  <p className='name'>{item.name}</p>
                  {item.isDefault === 'Y' && <p className='defaultText'>(預設)</p>}
                </div>
                <p className='mobile'>{item.mobile}</p>
                <p className='fullAddress'>{item.addr?.fullAddress}</p>
              </div>
              <div className='right'>
                <i className='delete' onClick={handleDeleteBtnClick}></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConsigneeList;
