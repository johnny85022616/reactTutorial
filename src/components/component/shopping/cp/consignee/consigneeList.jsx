import React from "react";


function ConsigneeList({data}) {
  return <div className="consigneeList">
    <ul>
      {data.map(v=>{
        return <li className="">
          <div className="left"></div>
          <div className="right"></div>
        </li>
      })}
    </ul>
  </div>;
}

export default ConsigneeList;
