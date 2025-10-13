import React from "react";


function ConsigneeList({data}) {
  return <div className="consigneeList">
    <ul>
      {data.map((v, idx)=>{
        return <li className="" key={idx}>
          <div className="left"></div>
          <div className="right"></div>
        </li>
      })}
    </ul>
  </div>;
}

export default ConsigneeList;
