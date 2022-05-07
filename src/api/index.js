import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

// APIs for posts
export const fetchPosts = () => API.get('/posts');
export const createPosts = (newPost) => API.post('/posts', newPost);
export const updatePost = (postId, postData) =>
  API.patch(`/posts/${postId}`, postData);
export const likePost = (postId) => API.patch(`/posts/${postId}/likePost`);
export const deletePost = (postId, postData) => API.patch(`/posts/${postId}`);

// APIs for users
export const signup = (formData) => API.post(`/user/signup`, formData);
export const login = (formData) => API.post(`/user/login`, formData);
