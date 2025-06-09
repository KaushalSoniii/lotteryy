import React from "react";
import { Eye, Plus, Trash2 } from "lucide-react";

const CustomTable = ({
  title,
  search,
  onSearch,
  onAdd,
  columns,
  data,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="max-w-[1112px] w-full mx-auto min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
          <label htmlFor="search" className="text-xl font-medium">
            Search:
          </label>
          <input
            type="text"
            placeholder={`${title} Name.......`}
            className="border px-3 py-1 rounded"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          <button
            onClick={onAdd}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded"
          >
            Add {title}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border rounded">
            <thead className="bg-[#0f0f3e] text-white text-sm">
              <tr>
                <th className="p-2 border">Sr. No.</th>
                {columns.map((col, index) => (
                  <th key={index} className="p-2 border">
                    {col.header}
                  </th>
                ))}
                <th className="p-2 border">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {data
                .slice((currentPage - 1) * 7, currentPage * 7)
                .map((row, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="p-2 border">
                      {(currentPage - 1) * 7 + index + 1}
                    </td>
                    {columns.map((col, idx) => (
                      <td key={idx} className="p-2 border">
                        {row[col.accessor]}
                      </td>
                    ))}
                    <td className="p-2 border flex gap-2">
                      <button className="bg-purple-500 text-white p-1 rounded">
                        <Plus size={16} />
                      </button>
                      <button className="bg-green-500 text-white p-1 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="bg-red-500 text-white p-1 rounded">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}

        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            Showing {(currentPage - 1) * 7 + 1} to{" "}
            {Math.min(currentPage * 7, data.length)} of {data.length} Entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-yellow-500 border border-yellow-500 px-3 py-1 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-3 py-1 rounded-sm bg-yellow-400 text-white">{currentPage}</span>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= Math.ceil(data.length / 7)}
              className="text-yellow-500 border border-yellow-500 px-3 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
