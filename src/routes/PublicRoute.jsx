/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";
import Dashboard from "../pages/modules/dashboard/Dashboard.jsx";
import AddBalance from "../pages/modules/addbalance/Addbalance.jsx";
import Distributor from "../pages/modules/distributor/Distributor.jsx";
import Setting from "../pages/modules/setting/Setting.jsx";
import SettingDetailPage from "../pages/modules/setting/SettingDetailPage.jsx";

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
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting/:section" element={<SettingDetailPage />} />
    </Routes>
  );
};

export default PublicRoute;
