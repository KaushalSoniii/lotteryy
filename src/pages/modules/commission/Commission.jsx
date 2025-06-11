import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layouts/Header";
import Sidebar from "../../../components/layouts/Sidebar";

const Commission = () => {
  const [activeTab, setActiveTab] = useState("Distributor");
  const [percentage, setPercentage] = useState(7);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    id: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    id: Yup.string().required("ID is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const data = { ...values, type: activeTab, percentage };
    setSubmittedData(data);
    setShowSuccess(true);
    resetForm();

    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);
  };

  return (
    <div className="flex pl-[20%] w-full mt-14 h-[92vh]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-gray-100 p-3 sm:p-6 lg:p-8 space-y-3">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-4 bg-white shadow-md rounded-lg p-3 w-full">
            <ArrowLeft
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate("/distributor")}
            />
            <h1 className="text-lg font-semibold">
              Set Commission for Distributors/Vendors
            </h1>
          </div>

          {/* Card */}
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h2 className="text-lg font-semibold">
                Set Commission for Distributors/Vendors
              </h2>
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
              {() => (
                <Form className="space-y-3">
                  {/* Name */}
                  <div>
                    <label className="mb-1 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      {activeTab} Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder={`Enter ${activeTab} name`}
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* ID */}
                  <div>
                    <label className="mb-1 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      {activeTab} ID
                    </label>
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

                  {/* Slider */}
                  <div className="mt-12">
                    <div className="flex items-center space-x-4 relative">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={percentage}
                        onChange={(e) =>
                          setPercentage(Number(e.target.value))
                        }
                        className="w-full"
                      />
                      <select
                        className="border px-2 py-1 rounded absolute right-0 bottom-5"
                        value={percentage}
                        onChange={(e) =>
                          setPercentage(Number(e.target.value))
                        }
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

                  {/* Submit Button */}
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-1 rounded"
                    >
                      Set Commission
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm text-center shadow-lg">
            <CheckCircle className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">
              {submittedData.type} {submittedData.name} (ID:{" "}
              {submittedData.id}) commission of {submittedData.percentage}% set successfully.
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                navigate(-1);
              }}
              className="mt-4 px-4 py-2  text-white rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commission;
