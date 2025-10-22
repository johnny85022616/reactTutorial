import api from '../../apis/api';

// loading action
const setLoading = (payload) => {
  return { type: 'SET_CONSIGNEE_LOADING', payload: payload };
};

// setConsignee action
const setConsigneeList = (payload) => {
  return { type: 'SET_CONSIGNEE_LIST', payload: payload };
};

//取得consignee列表
export const getConsigneeList = () => async (dispatch) => {
  dispatch(setLoading(true));
  const consigneeList = await api.member.getConsignee(true);
  if (consigneeList) {
    dispatch(setConsigneeList(consigneeList));
  }
  dispatch(setLoading(false));
};

//刪除consignee資料
export const deleteConsignee = (id) => async (dispatch) => {
  const pass = await api.member.deleteConsignee(id);
  if (pass) {
    dispatch(getConsigneeList());
  }
  return pass;
};

//更新預設consignee資料
export const updateConsignee = (id) => async (dispatch) => {
  const pass = await api.member.updateDefaultConsignee(id);
  if (pass) {
    dispatch(getConsigneeList());
  }
  return pass;
};

//新增consignee資料
export const createConsignee = (payload) => async (dispatch) => {
  const pass = await api.member.createConsignee(payload);
  if (pass) {
    await dispatch(getConsigneeList());
  }
  return pass;
};
