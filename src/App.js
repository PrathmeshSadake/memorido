import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Posts from './components/Posts/Posts';
// Pages
import HomePage from './pages/homepage';
import { getPosts } from './redux/actions/posts';
// Redux
import store from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
