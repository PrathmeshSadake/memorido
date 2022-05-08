import React from 'react';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import Paginate from '../components/Pagination';

const HomePage = () => {
  return (
    <div className='py-10'>
      <Posts />
      <Paginate />
    </div>
  );
};

export default HomePage;
