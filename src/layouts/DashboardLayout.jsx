import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "../styles/layout/dashboardlayout.scss"

const DashboardLayout = () => {
  return (
    <div className="dashboard_layout py-3 bg-slate-200">
     <Navbar />
      <div className="dashboard_pages flex">
        <Sidebar/>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;