import tools from '../utils/tools';
import config from '../configs/config';

const { frontApiPath, fetchPostHeaders } = config;
const frontPath = frontApiPath();

const memberInfo = {
  status: 0,
  message: 'OK',
  timestamp: 1721816456741,
  data: {
    fid: '28856775754861',
    emailMD5: 'b549c02bdb3be4f9584126085ee7ea8c',
    fetLife: 1,
    memberType:
      '%7B%22companyName%22%3A%22%E9%81%A0%E6%99%82%E6%95%B8%E4%BD%8D%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%2C%22employmentStatus%22%3A%22F1%22%2C%22shoppingMembership%22%3A%22CWM_employee%22%2C%22plusMembership%22%3A%22regular%22%2C%22companyId%22%3A%22221%22%2C%22dataFromMemberCenter%22%3Afalse%7D',
    employeeStatus: 'F1',
    couponCount: 9,
    emailSHA: '3f928bdd3c39689310c5401ff19f8071729b36d59d27fd52edef650051c4490a',
    shoppingBagCount: 0,
    userNeme: '員工 張裕',
    isFetnet: 1,
    userId: '63hiMqFBVEiDNYJttgytCw==',
    rebateInfo: {
      rebateRate: 10,
      hasRebate: true,
    },
    tid: 16181220,
    shoppingBagSummyList: [
      {
        cartType: 'DOOR_TO_DOOR',
        totalQuantity: 0,
        totalPrice: 0,
      },
      {
        cartType: 'DOOR_TO_STORE',
        totalQuantity: 0,
        totalPrice: 0,
      },
      {
        cartType: 'EXPRESS',
        totalQuantity: 0,
        totalPrice: 0,
      },
      {
        cartType: 'REWARD_POINT',
        totalQuantity: 0,
        totalPrice: 0,
      },
    ],
  },
};

export default {
  login() {
    if (this.isLogin) return;
    tools.setCookie('FEEC-B2C-UID', '63hiMqFBVEiDNYJttgytCw%3D%3D');
    tools.setCookie('_ga', 'GA1.1.794667265.1722235111');
    tools.setCookie('FEEC-FA-TOKEN', 'R2OqwvNPPPoPKkLCdhwXDSVDem5ZsQnY');
    tools.setCookie('FEEC-B2C-TICKET', 'MCwCFCnFlF3X4soUtzkD2OL5GJu5gIiUAhQIDWoYxozb2ZKt_QguZpb4nrJiyg');
    tools.setCookie('FEEC-B2C-INFO', encodeURIComponent(JSON.stringify(memberInfo.memInfo)));
    alert('登入成功');
  },
  logout() {
    tools.deleteCookie('FEEC-B2C-UID');
    tools.deleteCookie('FEEC-B2C-TICKET');
    tools.deleteCookie('FEEC-FA-TOKEN');
    tools.deleteCookie('FEEC-B2C-INFO');
    tools.deleteCookie('_ga');
    alert('已登出');
  },
  get isLogin() {
    const faToken = tools.getCookie('FEEC-FA-TOKEN');
    if (faToken) {
      return true;
    }
    return false;
  },
  // 取得收件人
  async getConsignee(isGetMark = false /** 是否取得隱碼 */) {
    return await fetch(`${frontPath}receiver/getReceiver?type=${isGetMark}`, {
      ...fetchPostHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        const { resultCode, resultData, resultMsg } = res;
        let data;
        if ([0, 800].includes(resultCode) && resultData) {
          data = resultData.info?.map((ele) => {
            return { ...ele, isDefaultBoolean: ele.isDefault === 'Y' ? true : false };
          });
          return data;
        }
        alert(resultMsg);
        return null;
      })
      .catch(() => {
        alert('取得收貨人發生錯誤');
        return null;
      });
  },
  //更新收貨人
  async updateDefaultConsignee(updateId) {
    return await fetch(`${frontPath}receiver/updateDefaultReceiver?dataId=${updateId}`, {
      ...fetchPostHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        const { resultCode, resultMsg } = res;
        if (resultCode === 0) {
          return true;
        }
        alert(resultMsg);
        return false;
      })
      .catch(() => {
        console.error('變更預設收貨人失敗');
        return false;
      });
  },
  //刪除收貨人
  async deleteConsignee(deleteId) {
    return await fetch(`${frontPath}receiver/deleteReceiver`, {
      ...fetchPostHeaders,
      body: JSON.stringify({ dataId: [deleteId] }),
    })
      .then((res) => res.json())
      .then((res) => {
        const { resultCode, resultMsg } = res;
        if (resultCode === 0) {
          return true;
        }
        alert(resultMsg);
        return false;
      })
      .catch(() => {
        console.error('刪除收貨人失敗');
        return false;
      });
  },
  //新增收貨人
  async createConsignee(postData) {
    return await fetch(`${frontPath}receiver/addReceiver`, {
      ...fetchPostHeaders,
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((res) => {
        const { resultCode, resultData, resultMsg } = res;
        if (resultCode === 0 && resultData) {
          return true;
        }
        alert(resultMsg);
        return false;
      })
      .catch(() => {
        console.error('新增收貨人失敗');
        return false;
      });
  },
};
