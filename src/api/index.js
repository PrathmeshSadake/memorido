import axios from 'axios';
const url = 'http://localhost:8000/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePost = (postId, postData) =>
  axios.patch(`url/${postId}`, postData);

export const signup = () => axios.post('');
export const login = () => axios.post('');
