/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";
import Dashboard from "../pages/modules/dashboard/Dashboard.jsx";
import AddBalance from "../pages/modules/addbalance/Addbalance.jsx";
import Distributor from "../pages/modules/distributor/Distributor.jsx";
import Settings from "../pages/modules/settings/Settings.jsx";
import SettingsDetailPage from "../pages/modules/settings/SettingsDetailPage.jsx";

const PublicRoute = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* User Management  */}
      <Route
        path="/example"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            {/* <UserManagementPanel /> */}
           
          </Layout>
        }
      />
       <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addbalance" element={<AddBalance />} />
      <Route path="/distributor" element={<Distributor />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/:section" element={<SettingsDetailPage />} />
    </Routes>
  );
};

export default PublicRoute;
