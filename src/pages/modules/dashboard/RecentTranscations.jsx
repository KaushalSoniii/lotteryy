import React, { useState } from "react";

const sampleData = [
  {
    type: "Distributor",
    name: "Ramesh Lal",
    id: "Ramesh - 5521",
    deposit: "3500 Pts",
    status: "Pending",
  },
  {
    type: "Distributor",
    name: "Ajay Shah",
    id: "Ajay-2540",
    deposit: "3500 Pts",
    status: "Pending",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 25551",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ajay Sen",
    id: "Ajay-250",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 25521",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ajay Sen",
    id: "Ajay-250",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 255521",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Vendor",
    name: "Manish Patel",
    id: "Manish-7890",
    deposit: "2000 Pts",
    status: "Confirmed",
  },
  {
    type: "Vendor",
    name: "Sneha Rao",
    id: "Sneha-4572",
    deposit: "1500 Pts",
    status: "Pending",
  },
  {
    type: "Distributor",
    name: "Ramesh Lal",
    id: "Ramesh - 25552",
    deposit: "3500 Pts",
    status: "Pending",
  },
  {
    type: "Distributor",
    name: "Ajay Shah",
    id: "Ajay-250",
    deposit: "3500 Pts",
    status: "Pending",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 25521",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ajay Sen",
    id: "Ajay-240",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 25521",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ajay Sen",
    id: "Ajay-240",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Distributor",
    name: "Ramesh Jain",
    id: "Ramesh - 25521",
    deposit: "3500 Pts",
    status: "Confirmed",
  },
  {
    type: "Vendor",
    name: "Manish Patel",
    id: "Manish-890",
    deposit: "2000 Pts",
    status: "Confirmed",
  },
  {
    type: "Vendor",
    name: "Sneha Rao",
    id: "Sneha-452",
    deposit: "1500 Pts",
    status: "Pending",
  },
];

const itemsPerPage = 5;

const RecentTransactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("All");

  const filteredData =
    selectedType === "All"
      ? sampleData
      : sampleData.filter((item) => item.type === selectedType);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleDropdownChange = (e) => {
    setSelectedType(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">Recent Transcations</h2>
      <div className="overflow-x-auto">
        {/* table */}
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">Sr. No.</th>
              <th className="px-4 py-2 whitespace-nowrap">
                {/* selectors between distributor and vendor */}
                <select
                  className="bg-black text-white p-1 border border-white rounded sm:w-auto"
                  value={selectedType}
                  onChange={handleDropdownChange}
                >
                  <option value="All">ALL</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </th>
              <th className="px-4 py-2 whitespace-nowrap">Name</th>
              <th className="px-4 py-2 whitespace-nowrap">ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Deposit</th>
              <th className="px-4 py-2 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* table content */}
            {currentItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{startIdx + index + 1}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.deposit}</td>
                <td className="px-4 py-2">
                  {/* status color green and yellow */}
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
        <span className="text-sm text-center sm:text-left">
          Showing {startIdx + 1} to{" "}
          {Math.min(startIdx + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </span>
        {/* previous and next button  */}
        <div className="flex items-center justify-center sm:justify-end gap-2">
          <button
            className={`px-3 py-1 rounded border border-yellow-600 text-yellow-600 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-3 py-1 rounded bg-yellow-500 text-black">
            {currentPage}
          </span>
          <button
            className={`px-3 py-1 rounded border border-yellow-600 text-yellow-600 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
