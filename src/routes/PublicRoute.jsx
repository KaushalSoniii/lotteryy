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
import AddEntityForm from "../components/global/AddEntityForm.jsx";
import Vendor from "../pages/modules/vendor/Vendor.jsx";
import Commission from "../pages/modules/commission/Commission.jsx";

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
      <Route path="/add-distributor" element={<AddEntityForm />} />
      <Route path="/add-vendor" element={<AddEntityForm />} />
      <Route path="/vendors" element={<Vendor />} />
      <Route path="/commission" element={<Commission />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/:section" element={<SettingsDetailPage />} />
    </Routes>
  );
};

export default PublicRoute;
