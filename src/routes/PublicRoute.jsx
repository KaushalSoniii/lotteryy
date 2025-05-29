/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";

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
    </Routes>
  )
};

export default PublicRoute;
