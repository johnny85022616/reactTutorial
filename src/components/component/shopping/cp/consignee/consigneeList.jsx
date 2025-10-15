import React, { memo } from 'react';
import {useFadeAlert} from '../common/fadeAlert';
import { useDispatch } from 'react-redux';
import {updateConsignee , deleteConsignee} from '../../redux/action/consigneeAction';

function ConsigneeList({ data }) {

  const dispatch = useDispatch()

  const {showAlert} = useFadeAlert()

  //更新預設收貨人
  async function updateDefaultConsignee(id){
    try{
      dispatch(updateConsignee(id))
      showAlert("修改成功")
    }catch(e){
      console.error("updateDefaultConsignee function error," , e);
    }
  }

  //刪除預設收貨人
  async function deleteConsigneeFn(id){
    try{
      dispatch(deleteConsignee(id))
      showAlert("刪除成功")
    }catch(e){
      console.error("deleteConsignee function error," , e);
    }
  }

  async function handleRadioClick(id){
    updateDefaultConsignee(id)
  }

  async function handleDeleteBtnClick(id){
    deleteConsigneeFn(id)
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
                <i className='delete' onClick={()=>handleDeleteBtnClick(item.id)}></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default memo(ConsigneeList);
