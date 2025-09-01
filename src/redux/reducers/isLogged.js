const isLogged = (state = true, action) => {
  switch (action.type) {
    case 'LOGGED':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
};

export default isLogged;
