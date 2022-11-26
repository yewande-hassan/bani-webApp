import React from "react";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

const RoutesComponents = () =>{
    return (
      <>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="" element={<DashboardLayout />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </>
    );
}
export default RoutesComponents;