import * as api from '../../api';

export const loginUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(userData);
    dispatch({ type: 'LOGIN', payload: data });
    navigate();
  } catch (error) {
    console.log(error.message);
  }
};

export const signupUser = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    dispatch({ type: 'SIGNUP', payload: data });
    navigate();
  } catch (error) {
    console.log(error.message);
  }
};
