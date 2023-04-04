import React from 'react';

import './Container.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';

const Container  = () => {
  return (
    <div className="main_container">
      <Header />
      <Outlet />
      <SideNav/>
      <Footer />
    </div>
  )
}

export default Container;