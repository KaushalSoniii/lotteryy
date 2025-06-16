import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/modules/dashboard/Dashboard";
import AddBalance from "./pages/modules/addbalance/Addbalance";
import Distributor from "./pages/modules/distributor/Distributor";
import Settings from "./pages/modules/settings/Settings";
import SettingsDetailPage from "./pages/modules/settings/SettingsDetailPage";
import AddEntityForm from "./components/global/AddEntityForm";
import Vendor from "./pages/modules/vendor/Vendor";
import Commission from "./pages/modules/commission/Commission";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
}

export default App;
