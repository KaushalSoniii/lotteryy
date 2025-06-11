// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { ArrowLeft } from "lucide-react";
// import Header from "../../components/layouts/Header";
// import Sidebar from "../../components/layouts/Sidebar";

// //  Define reusable configs here
// const distributorFields = [
//   {
//     name: "name",
//     label: "Distributor Name",
//     type: "text",
//     validation: Yup.string().required("Name is required"),
//   },
//   {
//     name: "distributorId",
//     label: "Distributor Id",
//     type: "text",
//     validation: Yup.string().required("ID is required"),
//   },
//   {
//     name: "phone",
//     label: "Phone Number",
//     type: "text",
//     validation: Yup.string().required("Phone is required"),
//   },
//   {
//     name: "amount",
//     label: "Add Balance",
//     type: "number",
//     validation: Yup.number().required("Amount is required"),
//   },
// ];

// const vendorFields = [
//   {
//     name: "name",
//     label: "Vendor Name",
//     type: "text",
//     validation: Yup.string().required("Name is required"),
//   },
//   {
//     name: "vendorId",
//     label: "Vendor Id",
//     type: "text",
//     validation: Yup.string().required("ID is required"),
//   },
//   {
//     name: "phone",
//     label: "Phone Number",
//     type: "text",
//     validation: Yup.string().required("Phone is required"),
//   },
//   {
//     name: "balance",
//     label: "Add Balance",
//     type: "number",
//     validation: Yup.number().required("Amount is required"),
//   },
// ];

// const formConfigs = {
//   distributor: {
//     title: "Distributor",
//     fields: distributorFields,
//     onSubmit: (values) => {
//       console.log("Distributor form submitted:", values);
//     },
//   },

//   vendor: {
//     title: "vendor",
//     fields: vendorFields,
//     onSubmit: (values) => {
//       console.log("vendor form submitted:", values);
//     },
//   },
//   // add more types here like "vendor", "customer", etc.
// };

// const AddEntityForm = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [submittedName, setSubmittedName] = useState("");
//   const [percentage, setPercentage] = useState(7);
//   const [balanceUnit, setBalanceUnit] = useState("Pts");
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const config = formConfigs[state?.type];

//   // fallback if config/type is missing
//   if (!config) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-600 text-lg font-semibold">
//           Form data not provided. Please go back and try again.
//         </p>
//       </div>
//     );
//   }

//   const { title, fields, onSubmit } = config;

//   const initialValues = fields.reduce((acc, field) => {
//     acc[field.name] = "";
//     return acc;
//   }, {});

//   const validationSchema = Yup.object(
//     fields.reduce((acc, field) => {
//       acc[field.name] = field.validation;
//       return acc;
//     }, {})
//   );

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values, { resetForm }) => {
//       onSubmit({ ...values, percentage, balanceUnit });

//       setSubmittedName(values.name); // or values[field.name] if needed
//       setShowSuccess(true); // show modal

//       resetForm(); // clear all fields
//       setPercentage(7); // reset slider
//       setBalanceUnit("Pts"); // reset balance unit

//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 2500);
//     },
//   });

//   return (
//     <div className="flex pl-[20%] w-full mt-12 h-">     
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="flex-1 bg-gray-100 p-3 sm:p-6 lg:p-8 space-y-3">
//           <div className="bg-white shadow-md rounded-lg p-4 w-full">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 text-gray-700 text-lg"
//             >
//               <ArrowLeft size={20} />
//               <span>Add {title}</span>
//             </button>
//           </div>
//           <div className="bg-white shadow-md rounded-sm p-4 w-full">
//             <div className="bg-white shadow rounded-lg p-5">
//               <h2 className="text-lg font-semibold mb-4">
//                 Create {title} Account
//               </h2>
//               <form onSubmit={formik.handleSubmit} className="space-y-3">
//                 {fields.map((field) => (
//                   <div key={field.name}>
//                     <label className="block font-medium mb-1">
//                       {field.label}
//                     </label>

//                     {field.name === "amount" ? (
//                       <div className="relative">
//                         <input
//                           type="number"
//                           name={field.name}
//                           placeholder={field.placeholder}
//                           className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-20"
//                           {...formik.getFieldProps(field.name)}
//                         />
//                         <select
//                           className="absolute right-0 top-0 bottom-0 px-2 py-2 border-l bg-white rounded-r text-sm"
//                           value={balanceUnit}
//                           onChange={(e) => setBalanceUnit(e.target.value)}
//                         >
//                           <option value="Pts">Pts</option>
//                           <option value="Coins">Coins</option>
//                           <option value="INR">INR</option>
//                         </select>
//                       </div>
//                     ) : (
//                       <input
//                         type={field.type || "text"}
//                         name={field.name}
//                         placeholder={field.placeholder}
//                         className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                         {...formik.getFieldProps(field.name)}
//                       />
//                     )}

//                     {formik.touched[field.name] &&
//                       formik.errors[field.name] && (
//                         <p className="text-red-500 text-sm mt-1">
//                           {formik.errors[field.name]}
//                         </p>
//                       )}
//                   </div>
//                 ))}

//                 {/* Slider */}
//                 <div className="mt-6">
//                   <label className="block font-medium mb-2">Interest</label>
//                   <div className="relative flex items-center space-x-4">
//                     <input
//                       type="range"
//                       min={0}
//                       max={100}
//                       value={percentage}
//                       onChange={(e) => setPercentage(Number(e.target.value))}
//                       className="w-full"
//                     />
//                     <select
//                       className="absolute right-0 bottom-5 border rounded px-2 py-1"
//                       value={percentage}
//                       onChange={(e) => setPercentage(Number(e.target.value))}
//                     >
//                       {[...Array(101).keys()].map((val) => (
//                         <option key={val} value={val}>
//                           {val}%
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex justify-between text-sm mt-1">
//                     <span className="text-black font-medium">0%</span>
//                     <span className="text-black font-medium">100%</span>
//                   </div>
//                 </div>

//                 <div className="text-center mt-2">
//                   <button
//                     type="submit"
//                     className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
//                   >
//                     Create Account
//                   </button>
//                 </div>
//               </form>

//               {showSuccess && (
//                 <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
//                   <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center">
//                     <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <p className="font-medium text-gray-800">
//                       {submittedName} as {title} account has been successfully
//                       created
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEntityForm;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft } from "lucide-react";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";

const distributorFields = [
  {
    name: "name",
    label: "Distributor Name",
    type: "text",
    placeholder: "Enter distributor name...",
    validation: Yup.string().required("Name is required"),
  },
  {
    name: "distributorId",
    label: "Distributor ID",
    type: "text",
    placeholder: "Enter distributor ID...",
    validation: Yup.string().required("ID is required"),
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter phone number...",
    validation: Yup.string().required("Phone is required"),
  },
  {
    name: "amount",
    label: "Add Balance",
    type: "number",
    placeholder: "Enter amount...",
    validation: Yup.number().required("Amount is required"),
  },
];

const vendorFields = [
  {
    name: "name",
    label: "Vendor Name",
    type: "text",
    placeholder: "Enter vendor name...",
    validation: Yup.string().required("Name is required"),
  },
  {
    name: "vendorId",
    label: "Vendor ID",
    type: "text",
    placeholder: "Enter vendor ID...",
    validation: Yup.string().required("ID is required"),
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter phone number...",
    validation: Yup.string().required("Phone is required"),
  },
  {
    name: "balance",
    label: "Add Balance",
    type: "number",
    placeholder: "Enter amount...",
    validation: Yup.number().required("Amount is required"),
  },
];

const formConfigs = {
  distributor: {
    title: "Distributor",
    fields: distributorFields,
    onSubmit: (values) => {
      console.log("Distributor form submitted:", values);
    },
  },
  vendor: {
    title: "Vendor",
    fields: vendorFields,
    onSubmit: (values) => {
      console.log("Vendor form submitted:", values);
    },
  },
};

const AddEntityForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [percentage, setPercentage] = useState(7);
  const [balanceUnit, setBalanceUnit] = useState("Pts");
  const { state } = useLocation();
  const navigate = useNavigate();

  const config = formConfigs[state?.type];

  if (!config) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Form type not found. Please go back.
        </p>
      </div>
    );
  }

  const { title, fields, onSubmit } = config;

  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    }, {})
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit({ ...values, percentage, balanceUnit });
      setSubmittedName(values.name);
      setShowSuccess(true);

      resetForm();
      setPercentage(7);
      setBalanceUnit("Pts");

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    },
  });

  return (
    <div className="flex pl-[20%] w-full mt-12 h-[90vh]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-gray-100 p-3 sm:p-6 lg:p-8 space-y-3">
          <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-700 text-lg"
            >
              <ArrowLeft size={20} />
              <span>Add {title}</span>
            </button>
          </div>

          <div className="bg-white shadow-md rounded-sm p-4 w-full">
            <div className="bg-white shadow rounded-lg p-5">
              <h2 className="text-lg font-semibold mb-4">
                Create {title} Account
              </h2>

              <form onSubmit={formik.handleSubmit} className="space-y-3">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label className="block font-medium mb-1">
                      {field.label}
                    </label>

                    {field.name === "amount" || field.name === "balance" ? (
                      <div className="relative">
                        <input
                          type="number"
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-20"
                          {...formik.getFieldProps(field.name)}
                        />
                        <select
                          className="absolute right-0 top-0 bottom-0 px-2 py-2 border bg-white rounded-r text-sm"
                          value={balanceUnit}
                          onChange={(e) => setBalanceUnit(e.target.value)}
                        >
                          <option value="Pts">Pts</option>
                          <option value="Coins">Coins</option>
                          <option value="INR">INR</option>
                        </select>
                      </div>
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        {...formik.getFieldProps(field.name)}
                      />
                    )}

                    {formik.touched[field.name] &&
                      formik.errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors[field.name]}
                        </p>
                      )}
                  </div>
                ))}

                {/* Slider */}
                <div className="mt-6">
                  <label className="block font-medium mb-2">Interest</label>
                  <div className="relative flex items-center space-x-4">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={percentage}
                      onChange={(e) => setPercentage(Number(e.target.value))}
                      className="w-full"
                    />
                    <select
                      className="absolute right-0 bottom-5 border rounded px-2 py-1"
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

                <div className="text-center mt-2">
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              {/* Modal */}
              {showSuccess && (
                <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">
                      {submittedName} as {title} account has been successfully
                      created
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEntityForm;
