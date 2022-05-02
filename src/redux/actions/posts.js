import * as api from '../../api';

export const getPosts = () => async (dispatch) => {
  // In redux thunk instead of returning an action we need to dispatch an action.
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
