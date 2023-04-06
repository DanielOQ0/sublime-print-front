import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

export default function () {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}
