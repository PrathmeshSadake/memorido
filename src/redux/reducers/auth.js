const initialState = { authData: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify(action?.payload));
      return { ...state, authData: action?.payload };
    case 'LOGOUT':
      localStorage.removeItem('profile');
      return { ...state, authData: initialState };
    default:
      return state;
  }
};

export default reducer;
