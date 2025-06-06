import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

const settingsData = {
  "terms-&-conditions": {
    title: "Terms & Conditions",
    content:  "Welcome to our platform, operated by Promoscale Media Private Limited (CIN). Our service, known as 'Play30Skill Quiz,' offers an online space for skill-based games that can be played casually or for real money, along with related content and services (collectively referred to as the 'Services'). These Services are accessible through our website and Windows application (together called the 'Platform')."
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: `Lorem ipsum dolor sit amet consectetur. Id eleifend diam facilisis venenatis diam quis nisl aliquam. Consectetur turpis ultrices leo viverra enim. Mollis nullam pretium neque massa enim feugiat blandit diam. Pellentesque a diam nulla egestas. Tristique arcu ut lobortis faucibus quam etiam integer congue. Turpis consequat nunc sed odio. Cras vel in at sit. Cursus mi egestas a proin faucibus id gravida morbi ac. Fames sed et nec fermentum gravida venenatis. Placera id platea egestas diam cras lacus orci aliquet eu. At donec diam duis lectus pellentesque.

Ut egestas ac vulputate aliquam eget. Lobortis quis aliquam nullam nulla egestas. Volutpat arcu dictumst iaculis lectus sed facilisi senectus. Eu pretium morbi ultrices lectus iaculis. Sagittis massa cursus dui odio commodo. Quam sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!`
  },
  "about-us": {
    title: "About Us",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt facilis delectus suscipit laborum, dignissimos dolorem amet porro modi vitae!`
  }
};

const SettingDetailPage = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const setting = settingsData[section];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 min-h-screen bg-gray-100 space-y-6">
      <div className="bg-white rounded shadow p-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm gap-2"
        >
          <ArrowLeft size={22} /> <h1 className="text-lg font-semibold">Settings</h1>
        </button>
         <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded shadow">
          <Pencil size={16} />
          Edit
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
       <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-sm sm:text-lg font-semibold text-gray-800">{setting?.title}</h2>
         <div className="text-sm sm:text-base p-4 text-gray-700 whitespace-pre-wrap">
          {setting?.content}
        </div>
       </div>
      </div>
    </div>
  );
};

export default SettingDetailPage;
