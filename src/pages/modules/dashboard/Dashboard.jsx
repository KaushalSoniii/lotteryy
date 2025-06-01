import React from "react";
import { useNavigate } from "react-router-dom";
import RecentTransactions from "./RecentTranscations";

const OverviewCard = ({ title, value }) => (
  <div className="border p-4 rounded shadow text-left">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1112px] w-full mx-auto min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
          <label htmlFor="search" className="text-xl font-medium">
            Search:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="border px-2 py-1 rounded w-full sm:w-auto"
          />
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded"
            onClick={() => navigate("/addbalance")}
          >
            Add Balance
          </button>
        </div>
      </div>

      {/* Today Overview */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Today's Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
          <OverviewCard title="Total Users" value="850" />
          <OverviewCard title="Total Entries" value="220" />
          <OverviewCard title="Total Earnings" value="12,200Rs" />
          <OverviewCard title="Barcode Scan" value="120" />
          <OverviewCard title="Total Active Quizzes" value="40" />
          <OverviewCard title="Available Balance" value="8,50,000Rs" />
        </div>
      </div>

      {/* Earning Overview */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Earning Overview</h2>
          <select className="border px-2 py-1 rounded w-full sm:w-auto">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div>
          {/* Placeholder for Chart */}
          <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed rounded">
            Weekly Earnings Chart
          </div>
        </div>
      </div>
      {/* recent transcation */}
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
