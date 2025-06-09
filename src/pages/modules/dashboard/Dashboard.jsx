import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecentTransactions from "./RecentTranscations";
import Header from "../../../components/layouts/Header";
import Sidebar from "../../../components/layouts/Sidebar";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { day: "Mon", earnings: 60000 },
  { day: "Tue", earnings: 50000 },
  { day: "Wed", earnings: 65000 },
  { day: "Thu", earnings: 78000 },
  { day: "Fri", earnings: 82000 },
  { day: "Sat", earnings: 86000 },
  { day: "Sun", earnings: 90000 },
];

const monthlyData = [
  { day: "Week 1", earnings: 220000 },
  { day: "Week 2", earnings: 280000 },
  { day: "Week 3", earnings: 260000 },
  { day: "Week 4", earnings: 310000 },
];

const yearlyData = [
  { day: "Jan", earnings: 1200000 },
  { day: "Feb", earnings: 1100000 },
  { day: "Mar", earnings: 1300000 },
  { day: "Apr", earnings: 1250000 },
  { day: "May", earnings: 1400000 },
  { day: "Jun", earnings: 1350000 },
  { day: "Jul", earnings: 1380000 },
  { day: "Aug", earnings: 1420000 },
  { day: "Sep", earnings: 1450000 },
  { day: "Oct", earnings: 1480000 },
  { day: "Nov", earnings: 1500000 },
  { day: "Dec", earnings: 1550000 },
];

const OverviewCard = ({ title, value }) => (
  <div className="border p-4 rounded shadow text-left">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  const [range, setRange] = useState("week");

  const getData = () => {
    switch (range) {
      case "month":
        return monthlyData;
      case "year":
        return yearlyData;
      case "week":
      default:
        return weeklyData;
    }
  };

  const data = getData();

  return (
    <div className="flex pl-[12%] w-[113%] mt-6 h-[30vh]">
    <Sidebar/>
    <div className="flex-1 flex flex-col">
       <Header/>
       <div className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8 space-y-6">
        <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
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

   <div
        className="space-y-8 overflow-y-auto no-scrollbar"
        style={{ maxHeight: "480px" }}
      >
      {/* Today Overview */}
      <div className="bg-white p-4 rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Today's Overview</h2>
        </div>
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
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Earning Overview</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          {/* Placeholder for Chart */}

          <h2 className="font-semibold">Weekly Earnings</h2>
          <select
            className="border px-2 py-1 rounded w-full sm:w-auto"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <div className="p-4 bg-white rounded">
          {/*  Earning chart  */}
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        style={{
                          background: "white",
                          padding: "6px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }}
                      >
                        ₹{payload[0].value.toLocaleString()}
                      </div>
                    );
                  }
                  return null;
                }}
              />

              <Bar
                dataKey="earnings"
                fill="#0f0f3e"
                barSize={30}
                radius={[10, 10, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#fcbf49"
                strokeWidth={3}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* recent transcation */}
      <RecentTransactions />
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default Dashboard;





