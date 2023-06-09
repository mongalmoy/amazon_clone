import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '../Container/Container';
import MainPage from '../../pages/MainPage';
import Login from '../Authenticator/Login';
import Register from "../Authenticator/Register";

const RouteHandler = () => {
  return (
    <div className='route_handler'>
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
