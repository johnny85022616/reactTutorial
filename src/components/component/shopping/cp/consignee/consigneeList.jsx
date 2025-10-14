import React from 'react';

function ConsigneeList({ data }) {
  return (
    <div className='consigneeList'>
      <ul>
        {data.map((item, idx) => {
          return (
            <li className='consigneeItem' key={idx}>
              <div className='left'>
                <div className='top'>
                  <span>
                    <i className={item.isDefault === "Y" ? 'iconRadio_on' : 'iconRadio'}></i>
                  </span>
                  <p className='name'>{item.name}</p>
                  {item.isDefault === 'Y' && <p class='defaultText'>(預設)</p>}
                </div>
                <p className='mobile'>{item.mobile}</p>
                <p className='fullAddress'>{item.addr?.fullAddress}</p>
              </div>
              <div className='right'></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConsigneeList;
