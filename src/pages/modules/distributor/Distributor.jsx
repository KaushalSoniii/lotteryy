import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PagePath from "../../../components/global/PagePath.jsx";

const Distributor = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { header: "Distributor Name", accessor: "name" },
    { header: "Distributor Id", accessor: "id" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Used Balance", accessor: "used" },
    { header: "Remaining Balance", accessor: "remaining" },
  ];

  const data = [
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ramesh Lal",
      id: "Ramesh-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
    {
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
  ];

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PagePath
      title="Distributor"
      search={search}
      onSearch={setSearch}
      onAdd={() =>
        navigate("/add-distributor", {
          state: { type: "distributor" }, // safe data
        })
      }
      columns={columns}
      data={filteredData}
      currentPage={currentPage}
      totalPages={Math.ceil(filteredData.length / 7)}
      onPageChange={setCurrentPage}
    />
  );
};

export default Distributor;
