import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layouts/Header";
import Sidebar from "../../../components/layouts/Sidebar";

const settingData = [
  {
    title: "Terms & Conditions",
    content:
      "Welcome to our platform, operated by Promoscale Media Private Limited (CIN). Our service, known as 'Play30Skill Quiz,' offers an online space for skill-based games that can be played casually or for real money, along with related content and services (collectively referred to as the 'Services'). These Services are accessible through our website and Windows application (together called the 'Platform').",
  },
  {
    title: "Privacy Policy",
    content: `Lorem ipsum dolor sit amet consectetur. Id eleifend diam facilisis venenatis diam quis nisl aliquam. Consectetur turpis ultrices leo viverra enim. Mollis nullam pretium neque massa enim feugiat blandit diam. Pellentesque a diam nulla egestas. Tristique arcu ut lobortis faucibus quam etiam integer congue. Turpis consequat nunc sed odio. Cras vel in at sit. Cursus mi egestas a proin faucibus id gravida morbi ac. Fames sed et nec fermentum gravida venenatis. Placera id platea egestas diam cras lacus orci aliquet eu. At donec diam duis lectus pellentesque.

Ut egestas ac vulputate aliquam eget. Lobortis quis aliquam nullam nulla egestas. Volutpat arcu dictumst iaculis lectus sed facilisi senectus. Eu pretium morbi ultrices lectus iaculis. Sagittis massa cursus dui odio commodo. Quam sed.`,
  },
  {
    title: "About Us",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!",
  },
];

const SettingPage = () => {
  const navigate = useNavigate();

  return (
 <div className="flex pl-[20%] w-full mt-14 h-[30vh]">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
           <Header/>

   <div className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Hide scrollbar */}
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
      <div className="bg-white rounded shadow p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
       <h2 className="text-xl font-semibold">Settings</h2>
      </div>
  
      {/* Scrollable Inner content*/}
      <div
        className="bg-white rounded shadow p-8 space-y-8 overflow-y-auto no-scrollbar"
        style={{ maxHeight: "499px" }}
      >
        {settingData.map((item, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4 space-y-2">
            <div className="flex justify-self-start items-start">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
            <p className="text-start p-2 text-sm text-gray-700 whitespace-pre-wrap">
              {item.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  navigate(
                    `/settings/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                  )
                }
                className="text-sm border border-yellow-400 text-yellow-600 px-3 py-1 rounded-lg hover:bg-yellow-100"
              >
                View all
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default SettingPage;
