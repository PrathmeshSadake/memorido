import * as api from '../../api';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.login(userData);
    dispatch({ type: 'AUTH', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    dispatch({ type: 'AUTH', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
