import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./components/SideNav/SideNav";

const App = () => {
  console.log(window.innerWidth);
  return (
    <>
      <Header />
      <SideNav />
    </>
  );
};

export default App;
