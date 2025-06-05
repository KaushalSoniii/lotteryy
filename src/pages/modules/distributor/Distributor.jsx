import React, { useState } from "react";
import PagePath from "../../../components/global/PagePath.jsx";

const DistributorPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
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
      name: "Ajay Sen",
      id: "Ajay-2540",
      phone: "7856498498",
      used: "4500 Pts",
      remaining: "3500 Pts",
    },
  
  ];

  const columns = [
    { header: "Distributor Name", accessor: "name" },
    { header: "Distributor Id", accessor: "id" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Used Balance", accessor: "used" },
    { header: "Remaining Balance", accessor: "remaining" },
  ];

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PagePath
      title="Distributor"
      search={search}
      onSearch={setSearch}
      onAdd={() => alert("Add distributor")}
      columns={columns}
      data={filteredData}
      currentPage={page}
      totalPages={1}
      onPageChange={(newPage) => setPage(newPage)}
    />
  );
};

export default DistributorPage;
