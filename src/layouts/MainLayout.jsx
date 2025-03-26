import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Users from "../pages/Users";

function MainLayout() {
  return (
    <div className="flex">
      <main className="min-h-screen w-full overflow-x-auto bg-base-100 pb-24 pt-24 dark:bg-base-200 md:relative md:pt-0  lg:max-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
