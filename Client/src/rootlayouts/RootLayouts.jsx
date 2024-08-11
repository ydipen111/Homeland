import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const RootLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayouts;
