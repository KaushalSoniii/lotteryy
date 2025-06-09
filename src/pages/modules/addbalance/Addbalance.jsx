import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layouts/Header";
import Sidebar from "../../../components/layouts/Sidebar";

const AddBalance = () => {
  const [activeTab, setActiveTab] = useState("Distributor");
  const [percentage, setPercentage] = useState(7);
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const initialValues = {
    name: "",
    id: "",
    amount: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    id: Yup.string().required("ID is required"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Must be a positive number"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const data = { ...values, type: activeTab, percentage };
    setSubmittedData(data);
    setShowSuccess(true);
    resetForm(); // optional to use
  };

  return (
    <div className="flex pl-[12%] w-[113%] mt-6 h-[30vh]">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
           <Header/>
   <div className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4 bg-white shadow-md rounded-lg p-3 w-full">
        <ArrowLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold">
          Add Balance Distributor/Vendor
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Add Balance Distributor/Vendor</h2>
        </div>

        {/* Tabs */}
        <div className="flex mb-2 space-x-4"> 
          {["Distributor", "Vendor"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border rounded ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Formik */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1 flex flex-col sm:flex-row items-start sm:items-center gap-2">{activeTab} Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder={`Enter ${activeTab} name`}
                  className="w-full px-3 py-2 border rounded "
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* ID */}
              <div>
                <label className="mb-1 flex flex-col sm:flex-row items-start sm:items-center gap-2">{activeTab} ID</label>
                <Field
                  type="text"
                  name="id"
                  placeholder={`Enter ${activeTab} ID`}
                  className="w-full px-3 py-2 border rounded"
                />
                <ErrorMessage
                  name="id"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Amount and Add button */}
              <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
                <div className="flex-1">
                  <label className="mb-1 flex flex-col sm:flex-row items-start sm:items-center gap-2">Add Balance</label>
                  <Field
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded w-full md:w-auto"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Slider for interest */}
              <div className="mt-12">
                <div className="flex items-center space-x-4 relative">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={percentage}
                    onChange={(e) => setPercentage(Number(e.target.value))}
                    className="w-full"
                  />
                  <select
                    className="border px-2 py-1 rounded absolute right-0 bottom-5"
                    value={percentage}
                    onChange={(e) => setPercentage(Number(e.target.value))}
                  >
                    {[...Array(101).keys()].map((val) => (
                      <option key={val} value={val}>
                        {val}%
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-black font-medium">0%</span>
                  <span className="text-black font-medium">100%</span>
                </div>
              </div>

              {/* Done Button */}
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-1 rounded"
                >
                  Done
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Success popup message */}
      {showSuccess && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm text-center shadow-lg">
            <CheckCircle className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">
              {submittedData.type} {submittedData.name} Balance{" "}
              {submittedData.amount}pts and {submittedData.percentage}%
              commission successfully added.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default AddBalance;
