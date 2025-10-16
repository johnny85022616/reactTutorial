import api from "../../apis/api";

const setLoading = (payload) => {
  return { type: "SET_CONSIGNEE_LOADING", payload: payload };
};

const setConsigneeList = (payload) => {
  return { type: "SET_CONSIGNEE_LIST", payload: payload };
};

export const getConsigneeList = () => async (dispatch) => {
  dispatch(setLoading(true));
  const consigneeList = await api.member.getConsignee(true);
  if (consigneeList) {
    dispatch(setConsigneeList(consigneeList));
  }
  dispatch(setLoading(false));
};

export const deleteConsignee = (id) => async (dispatch) => {
  const pass = await api.member.deleteConsignee(id);
  if (pass) {
    dispatch(getConsigneeList());
  }
  return pass;
};

export const updateConsignee = (id) => async (dispatch) => {
  const pass = await api.member.updateDefaultConsignee(id);
  if (pass) {
    dispatch(getConsigneeList());
  }
  return pass;
};
