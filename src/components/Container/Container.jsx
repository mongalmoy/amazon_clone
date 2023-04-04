import React from 'react';
import './Container.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container  = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Container;