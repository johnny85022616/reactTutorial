import React, { useEffect, useState } from "react";

function useEffectFetch() {
  const [productList, setProdutList] = useState(null);

  useEffect(() => {
    fetch("https://k8aiapi.shopping.friday.tw/api/getalist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target_value: "2132678590.1646502645",
        q1_x: 0.5,
        list_num: 10,
        type: 2,
        supplier_y: 1,
        filter: {
          k: "0100000000",
          v: [
            "",
            "46728,45845,46702,45974,46329,45534",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        ui_cnt: "recForYou",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data && data[0]?.pids);
        if (data && data[0]?.pids) {
          setProdutList(data[0]?.pids);
        }
      });
  }, []);

  return (
    <>
      <h2>useEffect fetch 練習</h2>
        <ul>
         { productList? productList.map((v,i)=>{
          return <li key={i}>{v.name}</li>
         }) : null}
        </ul>
    </>
  );
}

export default useEffectFetch;
