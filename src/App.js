import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import RouteHandler from "./components/RouteHandler/RouteHandler";

const App = () => {
  console.log(window.innerWidth);
  return (
    <>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </>
  );
};

export default App;
