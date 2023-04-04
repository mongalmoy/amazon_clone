import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import Login from '../Authenticator/Login';
import Register from "../Authenticator/Register";

const RouteHandler = () => {
  return (
    <div className='route-handler'>
      <Routes>
        <Route element={<Login />} />

        <Route element={<Register />} />

        <Route path='/' element={<Container />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default RouteHandler;
