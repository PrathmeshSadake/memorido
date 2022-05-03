import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <div></div>
  ) : (
    <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-8'>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
