import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import Main2 from "./Main2";
import ClientsOverview from "./ClientsOverview";
import Menu from "./Menu";
import Profile from "./Profile";

import { Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-[100vw] h-full flex justify-between ">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
