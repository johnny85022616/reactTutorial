import { memo } from "react";

function Child({isEven}) {
  console.log("子元件執行");
  return (
    <>
      <p>Child</p>
      <p>child接收是否為雙數: {isEven? "雙數":"單數"}</p>
    </>
    
  )
}

//React.memo會監聽傳入的props，若props有變動才會重新render該組件(reference type必須改變記憶體位置才算變動)
export default memo(Child)