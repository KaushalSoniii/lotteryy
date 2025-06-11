import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Commission = () => {
  const [type, setType] = useState("Distributor");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [commission, setCommission] = useState(7);
  const [commissionList, setCommissionList] = useState([]);
  const navigate = useNavigate();

  // Dropdown options for commission %
  const commissionOptions = Array.from({ length: 21 }, (_, i) => i * 5);

  const handleAddCommission = () => {
    if (!name.trim() || !id.trim()) return;
    setCommissionList([
      ...commissionList,
      { type, name, id, commission },
    ]);
    setName("");
    setId("");
    setCommission(7);
  };

  const handleDelete = (idx) => {
    setCommissionList(commissionList.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex items-start">
      {/* Sidebar space */}
      <div className="hidden lg:block" style={{ width: 220 }} />
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Top bar */}
        <div className="w-full max-w-5xl mt-8">
          <div className="bg-white rounded-xl shadow border border-gray-200 px-6 py-4 flex items-center gap-4">
            <button
              className="text-xl focus:outline-none"
              onClick={() => navigate("/")}
              aria-label="Back"
            >
              <span className="inline-block rotate-180">&#10140;</span>
            </button>
            <span className="font-medium text-lg">
              Set Commission For Distributors/Vendors
            </span>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-3xl mt-8">
          <div className="bg-white rounded-xl shadow border border-gray-200 px-8 py-8">
            <h2 className="text-xl font-semibold mb-6">
              Set Commission For Distributors/Vendors
            </h2>
            {/* Toggle */}
            <div className="flex gap-3 mb-6">
              <button
                className={`px-6 py-2 rounded-md border text-base font-medium transition ${
                  type === "Distributor"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
                onClick={() => setType("Distributor")}
              >
                Distributor
              </button>
              <button
                className={`px-6 py-2 rounded-md border text-base font-medium transition ${
                  type === "Vendor"
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
                onClick={() => setType("Vendor")}
              >
                Vendor
              </button>
            </div>
            {/* Form */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  {type} Name
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${type} Name`}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  {type} Id
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${type} Id`}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              {/* Commission slider and dropdown */}
              <div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={commission}
                    onChange={(e) => setCommission(Number(e.target.value))}
                    className="commission-slider flex-1"
                  />
                  <select
                    className="border border-gray-300 rounded-md px-2 py-1 bg-white"
                    value={commission}
                    onChange={(e) => setCommission(Number(e.target.value))}
                  >
                    {commissionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}%
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between text-base text-black mt-1 font-medium">
                  <span>0%</span>
                  <span className="font-semibold text-gray-800">{commission}%</span>
                  <span>100%</span>
                </div>
              </div>
              {/* Add button */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-[#FFC107] hover:bg-yellow-500 text-black font-semibold px-8 py-2 rounded shadow transition border border-yellow-400"
                  onClick={handleAddCommission}
                  disabled={!name.trim() || !id.trim()}
                >
                  Set Commission
                </button>
              </div>
            </div>
            {/* List of added commissions */}
            {commissionList.length > 0 && (
              <div className="mt-10">
                <h3 className="font-semibold mb-2 text-left">Added Commissions</h3>
                <ul className="space-y-2">
                  {commissionList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 border border-gray-200"
                    >
                      <div>
                        <span className="font-medium">{item.type}:</span>{" "}
                        {item.name} (ID: {item.id}) —{" "}
                        <span className="text-green-600 font-semibold">
                          {item.commission}%
                        </span>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 font-bold px-2"
                        onClick={() => handleDelete(idx)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Commission;