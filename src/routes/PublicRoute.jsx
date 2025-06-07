/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";
import Dashboard from "../pages/modules/customer/Dashboard.jsx";

const PublicRoute = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login />
        }
      />
      {/* User Management  */}
      <Route
        path="/example"
        element={
          <Layout
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            {/* <UserManagementPanel /> */}
          </Layout>
        }
      />
        <Route 
          path="dashboard" 
          element={<Dashboard />} 
        />
      <Route />
    </Routes>
  )
};

export default PublicRoute;
