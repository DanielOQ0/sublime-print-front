import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <nav>NAVBAR ADMIN PANEL</nav>
      <Outlet />
      
    </>
  );
}
