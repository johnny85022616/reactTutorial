const initialState = {
  consigneeList: null,
  isLoading: false,
};

const consigneeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONSIGNEE_LIST':
      console.log(action.payload);
      return { ...state, consigneeList: action.payload };
    case 'SET_CONSIGNEE_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default consigneeReducer;
