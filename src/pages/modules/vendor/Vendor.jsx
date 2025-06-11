import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PagePath from "../../../components/global/PagePath.jsx";

const Vendor = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { header: "Vendor Name", accessor: "name" },
    { header: "Vendor Id", accessor: "id" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Used Balance", accessor: "used" },
    { header: "Remaining Balance", accessor: "remaining" },
  ];

  const data = [
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
    {
      name: "Ramlal Shah",
      id: "Vendor-2540",
      phone: "9876543210",
      used: "2000 Pts",
      remaining: "8000 Pts",
    },
    {
      name: "Priya Verma",
      id: "Vendor-2541",
      phone: "9123456789",
      used: "1000 Pts",
      remaining: "9000 Pts",
    },
  ];

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PagePath
      title="Vendor"
      search={search}
      onSearch={setSearch}
      onAdd={() =>
        navigate("/add-vendor", {
          state: { type: "vendor" }, // safe data
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

export default Vendor;
